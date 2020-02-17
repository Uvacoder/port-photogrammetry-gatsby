import { GatsbyNode } from "gatsby"
import { PagesQuery, ArticlesQuery } from '../types'
import { CheckQuery } from '../utils/graphqlUtils'
import * as path from "path"

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions: { createPage } }) => {

  const articlesQuery = CheckQuery(await graphql<ArticlesQuery>(`
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
  `))

  const articles = articlesQuery.allMarkdownRemark.edges.filter(article => article.node.frontmatter.draft === null || article.node.frontmatter.draft === false)

  const publishedArticles = articles.reduce((acc, article) => {
    // @ts-ignore
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

  const pagesQuery = CheckQuery(await graphql<PagesQuery>(`
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
`))

  const pages = pagesQuery.allMarkdownRemark.edges
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
