
const pageQuery = `{
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(posts)/"}, frontmatter: {draft: {ne: true}}}) {
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
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

// @ts-ignore
const flatten = arr =>
  // @ts-ignore
  arr.map(({ frontmatter, fields, ...rest }) => ({
    ...frontmatter,
    ...fields,
    ...rest,
  }))
const settings = { attributesToSnippet: ['excerpt:20'] }

export const queries = [
  {
    query: pageQuery,
    // @ts-ignore
    transformer: ({ data }) => {
      console.log(data)
      return flatten(data.allMarkdownRemark.edges)
    },
    indexName: 'Pages',
    settings,
  },
]
