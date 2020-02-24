import * as React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import { BlogListerQuery } from '../../types'
import BlogCard from '../BlogCard'
import CardContainer from '../CardContainer'

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
  category: string[]
}

const BlogLister: React.FC<BlogListerProps> = (props) => (
  <StaticQuery
    query={ComponentQuery}
    render={(data: BlogListerQuery) => (<CardContainer>
      {data.allMarkdownRemark.edges.map(post => {
        if (post.node.frontmatter.draft !== true && (props.category.every(x => post.node.frontmatter.categories.includes(x)))) {
          return <BlogCard
            key={post.node.fields.slug}
            title={post.node.frontmatter.title!}
            slug={post.node.fields.slug}
            description={post.node.frontmatter.description!}
            excerpt={post.node.excerpt!}
            date={post.node.frontmatter.date}
            categories={post.node.frontmatter.categories}
            featuredImage={{
              data: post.node.frontmatter.featuredImage?.src.childImageSharp?.fluid,
              description: post.node.frontmatter.featuredImage?.description!
            }}>
          </BlogCard>
        }
      })}
    </CardContainer>)}
  />
)




export default BlogLister
