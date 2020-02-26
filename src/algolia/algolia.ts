
const pageQuery = `{
  pages: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(posts)/"}, frontmatter: {draft: {ne: true}}}) {
    edges {
      node {
        fields {
          slug
        }
        objectID: id
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          categories
          featuredImage {
            description
            src {
              childImageSharp {
                fluid(quality: 50) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
            }
          }
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

// @ts-ignore
const flatten = arr =>
  // @ts-ignore
  arr.map(({ node: { frontmatter, fields, ...rest } }) => ({
    ...frontmatter,
    ...fields,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

export const queries = [
  {
    query: pageQuery,
    // @ts-ignore
    transformer: ({ data }) => flatten(data.pages.edges),
    indexName: `Pages`,
    settings,
  },
]
