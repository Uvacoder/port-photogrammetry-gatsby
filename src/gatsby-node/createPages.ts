import { GatsbyNode } from "gatsby"
import * as path from "path"

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions: { createPage } }) => {

  const articlesQuery = await graphql(`
  query articles {
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

  // @ts-ignore
  const articles: any[] = articlesQuery.data.allMarkdownRemark.edges.filter(article => article.node.frontmatter.draft === null || article.node.frontmatter.draft === false)

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
  query pages {
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

  // @ts-ignore
  const pages: any[] = pagesQuery.data.allMarkdownRemark.edges
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
}

function getPrevAndNextArticles(articles: any, slug: any) {
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
