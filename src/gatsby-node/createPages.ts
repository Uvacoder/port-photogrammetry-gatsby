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
            fields {
              layout
              slug
            }
          }
        }
      }
    }
  `))

  const articles = articlesQuery.allMarkdownRemark.edges.map(x => x.node)
  const articleSlugMap = toDictionary(articles, x => x.fields.slug)

  articles.forEach((
    { fields:
      { slug, layout }
    }
  ) => {
    const [previous, next] = getPrevAndNextArticles(articleSlugMap, slug).filter(x => x !== undefined).map(x => getNode(x!.id))

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

function getPrevAndNextArticles<T>(articles: T, slug: string) {
  const currentArticleIndex = Object.keys(articles).findIndex(
    articleSlug => articleSlug === slug
  )
  const articlesArray = Object.values(articles) as T[]
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

function toDictionary<TValue>(collection: TValue[], keySelector: Func<string, TValue>) {
  const dictionary = collection.reduce((acc, element) => {
    acc[keySelector(element)] = element
    return acc
  }, {} as { [key: string]: TValue })

  return dictionary;
}

interface Func<TOut, TIn> {
  (message: TIn): TOut;
}
