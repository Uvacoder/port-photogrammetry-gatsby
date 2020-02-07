import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { BlogListerQuery } from '../types'
import BlogCard from './BlogCard'

export const ComponentQuery = graphql`
query BlogLister {
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/(posts)/"}}) {
    edges {
      node {
        fields {
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
                  ...GatsbyImageSharpFluid_withWebp
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
`
interface BlogListerProps {
  category?: string
}

const BlogLister: React.FC<BlogListerProps> = (props) => (
  <StaticQuery
    query={ComponentQuery}
    render={(data: BlogListerQuery) => (<>
      {data.allMarkdownRemark.edges.map(post => {
        if (post.node.frontmatter?.draft !== true && (props.category === undefined || post.node.frontmatter?.categories?.includes(props.category!))) {
          return <BlogCard
            title={post.node.frontmatter!.title!}
            slug={post.node.fields!.slug!}
            description={post.node.frontmatter!.description!}
            excerpt={post.node.excerpt!} date={post.node.frontmatter!.date}
            categories={post.node.frontmatter!.categories!}
            blogImage={post.node.frontmatter?.featuredImage?.src?.childImageSharp?.fluid}
            blogImageDescription={post.node.frontmatter?.featuredImage?.description!}>
          </BlogCard>
        }
      })}
    </>)}
  />
)




export default BlogLister
