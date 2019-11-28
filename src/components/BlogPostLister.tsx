import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { BlogListerQuery } from '../types'
import { ToFixed } from './ToFluid'
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
                fixed(height: 170, quality: 50) {
                  srcWebp
                  srcSetWebp
                  src
                  srcSet
                  base64
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
          var blogImage = post.node.frontmatter?.featuredImage?.src?.childImageSharp?.fixed;
          return <BlogCard
            title={post.node.frontmatter!.title!}
            slug={post.node.fields!.slug!}
            description={post.node.frontmatter!.description!}
            excerpt={post.node.excerpt!} date={post.node.frontmatter!.date}
            categories={post.node.frontmatter!.categories!}
            blogImage={blogImage !== null && blogImage !== undefined && ToFixed(blogImage)}
            blogImageDescription={post.node.frontmatter?.featuredImage?.description!}>
          </BlogCard>
        }
      })}
    </>)}
  />
)




export default BlogLister
