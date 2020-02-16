// @ts-check

'use strict'

const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path')

exports.createSchemaCustomization = ({ actions }) => {
  const { createFieldExtension, createTypes } = actions

  const typeDefs = `
  type MarkdownRemarkFrontmatterFeaturedImage @infer{
      src: File! @fileByDataPath
    }
    type Frontmatter @infer {
      title: String!
      categories: [String!]
      tags: [String!]
      featuredImage: MarkdownRemarkFrontmatterFeaturedImage
    }
    type MarkdownRemark implements Node @infer {
      frontmatter: Frontmatter!
      fields: MarkdownRemarkFields!
      html: String!
    }
    type MarkdownRemarkFields {
      slug: String!
      title: String!
      layout: String!
    }

    type SiteSiteMetadata{
      title: String!
      siteUrl: String!
      description: String!
      keywords: String!
      author: SiteSiteMetadataAuthor!
      social: SiteSiteMetadataSocial!
    }

    type SiteSiteMetadataSocial{
      github: String
      instagram: String
      linkedin: String
    }

    type SiteSiteMetadataAuthor{
      name: String!
      url: String!
    }

    type Site implements Node @infer {
      siteMetadata: SiteSiteMetadata!
    }

    type SitePage{
      context: SitePageContext!
    }

    type SitePageContext{
      slug: String
    }

    type SitePageContextPrevious{
      node: SitePageContextPreviousNode!
    }

    type SitePageContextPreviousNode{
      fields: SitePageContextPreviousNodeFields!
      frontmatter: SitePageContextPreviousNodeFrontmatter!
      excerpt: String!
    }

    type SitePageContextPreviousNodeFields{
      layout: String!
      slug: String!
    }

    type SitePageContextPreviousNodeFrontmatter{
      title: String!
    }
  `

  createTypes(typeDefs)

  createFieldExtension({
    name: 'fileByDataPath',
    extend: () => ({
      resolve: function (featureImage, args, context, info) {
        let partialPath = featureImage.src
        if (!partialPath) {
          return null
        }

        const regex = "/(/static/" + partialPath + ")/"
        const fileNode = context.nodeModel.runQuery({
          firstOnly: true,
          type: 'File',
          query: {
            filter: {
              absolutePath: {
                regex: regex
              }
            }
          }
        })

        if (!fileNode) {
          return null
        }

        return fileNode
      }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.

  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const { layout } = node.frontmatter
      const slug = createFilePath({ node, getNode, basePath: `posts` }).toLowerCase().replace('pages/', '');

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug.replace(/ /g, '-') || ''
      })

      // Used to determine a page layout.
      createNodeField({
        node,
        name: 'layout',
        value: layout || ''
      })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const articlesQuery = await graphql(`
    {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/(posts)/"}}) {
        edges {
          node {
            fields {
              layout
              slug
            }
            frontmatter {
              title
              draft
              date(formatString: "D-MM-YYYY")
              categories
              description
              featuredImage {
                description
                src {
                  childImageSharp {
                    fluid(quality: 50) {
                      srcWebp
                      srcSetWebp
                      src
                      srcSet
                      sizes
                      base64
                      aspectRatio
                    }
                  }
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `)

  const articles = articlesQuery.data.allMarkdownRemark.edges.filter(article => article.node.frontmatter.draft === null || article.node.frontmatter.draft === false)

  const publishedArticles = articles.reduce((acc, article) => {
    acc[article.node.fields.slug] = article
    return acc
  }, {})

  articles.forEach(({ node }) => {
    const { slug, layout } = node.fields

    const [previous, next] = getPrevAndNextArticles(
      publishedArticles,
      node.fields.slug
    )

    createPage({
      path: slug,
      component: path.resolve(`./src/templates/${layout || 'blogPost'}.tsx`),
      context: {
        slug,
        previous,
        next
      }
    })
  })

  const pagesQuery = await graphql(`
  {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/(pages)/"}}) {
      edges {
        node {
          fields {
            layout
            slug
          }
        }
      }
    }
  }
`)

  if (pagesQuery.errors) {
    console.error(pagesQuery.errors)
    throw new Error(pagesQuery.errors)
  }
  const pages = pagesQuery.data.allMarkdownRemark.edges
  pages.forEach(({ node }) => {
    const { slug, layout } = node.fields

    createPage({
      path: slug,
      component: path.resolve(`./src/templates/${layout || 'blogPost'}.tsx`),
      context: {
        slug
      }
    })
  })

  function getPrevAndNextArticles(articles, slug) {
    const currentArticleIndex = Object.keys(articles).findIndex(
      articleSlug => articleSlug === slug
    )
    const articlesArray = Object.values(articles)
    let prevArticle
    let nextArticle
    if (currentArticleIndex < articlesArray.length - 1) {
      prevArticle = articlesArray[currentArticleIndex + 1]
    }
    if (currentArticleIndex > 0) {
      nextArticle = articlesArray[currentArticleIndex - 1]
    }
    return [prevArticle, nextArticle]
  }
}
