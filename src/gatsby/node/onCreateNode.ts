import { createFilePath } from "gatsby-source-filesystem"
import { GatsbyNode } from "gatsby"

export const onCreateNode: GatsbyNode["onCreateNode"] = ({ node, actions: { createNodeField }, getNode }) => {
  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.

  switch (node.internal.type) {
    case 'MarkdownRemark': {
      // @ts-ignore
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
