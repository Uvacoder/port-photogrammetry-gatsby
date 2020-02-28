
const pageQuery = `{
  pages: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(posts)/"}, frontmatter: {draft: {ne: true}}}) {
      nodes {
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
    transformer: ({ data }) => flatten(data.nodes),
    indexName: 'Pages',
    settings,
  },
]
