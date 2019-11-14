import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'

interface StaticQueryProps {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          frontmatter: {
            title: string
          }
        }

      }
    ]
  }
}

const BlogLister: React.FC = () => (
  <StaticQuery
    query={graphql`
    query BlogListerQuery {
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
    `}
    render={(data: StaticQueryProps) => (
      <h1>
        {data.allMarkdownRemark.edges.map(post => <h1>{post.node.frontmatter.title}</h1>)}
      </h1>
    )}
  />
)

export default BlogLister
