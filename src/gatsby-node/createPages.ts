import { GatsbyNode } from "gatsby"
import { PagesQuery, ArticlesQuery } from '../types'
import { CheckQuery } from '../utils/graphqlUtils'
import * as path from "path"

export const createPages: GatsbyNode["createPages"] = async (
  { graphql, actions:
    {
      createPage
    }, getNode
  }) => {

  const articlesQuery = CheckQuery(await graphql<ArticlesQuery>(`
  query articles {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/(posts)/"}}) {
        edges {
          node {
            id
          }
        }
      }
    }
  `))

  const articles = articlesQuery.allMarkdownRemark.edges.map(x => getNode(x.node.id))
  const articleSlugMap = articles.reduce((acc, article) => {
    // @ts-ignore
    acc[article.fields.slug] = article
    return acc
  }, {})

  articles.forEach((
    { fields:
      { slug, layout }
    }
  ) => {
    const [previous, next] = getPrevAndNextArticles(articleSlugMap, slug)

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
  pages.forEach((
    { node:
      { fields:
        { slug, layout }
      }
    }) => {
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/${layout || 'blogPost'}.tsx`),
      context: {
        slug
      }
    })
  })
}

function getPrevAndNextArticles(articles: any, slug: string) {
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
