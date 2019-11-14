import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { BlogListerQuery } from '../types'

export const PageQuery = graphql`
query BlogLister {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
        }
      }
    }
  }
}
`

const BlogLister: React.FC = () => (
  <StaticQuery
    query={PageQuery}
    render={(data: BlogListerQuery) => (
      <h1>
        {data.allMarkdownRemark.edges.map(post => <h1>{post.node.frontmatter.title}</h1>)}
      </h1>
    )}
  />
)

export default BlogLister
