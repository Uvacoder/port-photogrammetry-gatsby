import * as React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { BlogListerQuery } from '../types'
import Img from "gatsby-image"
import { ToFixed } from './ToFluid'
import PostDate from './PostDate'

export const ComponentQuery = graphql`
query BlogLister {
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/(posts)/"}}) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "D-MM-YYYY")
          tags
          categories
          displayInList
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

const BlogLister: React.FC = () => (
  <StaticQuery
    query={ComponentQuery}
    render={(data: BlogListerQuery) => (<>
      {data.allMarkdownRemark.edges.map(post => {
        var blogImage = post.node.frontmatter?.featuredImage?.src?.childImageSharp?.fixed;
        return <Link className="card blog-card" to={post.node.fields!.slug!}>
          {blogImage !== null && blogImage !== undefined && <Img className="card-img-container" fixed={ToFixed(blogImage)} alt="" />}
          <article className="card-body">
            <h2 className="card-title">{post.node.frontmatter!.title}</h2>
            <p className="card-text">{post.node.frontmatter!.description ?? post.node.excerpt}</p>
            <div className="card-subtext muted-text">
              <PostDate date={post.node.frontmatter!.date}></PostDate>
              <p>
                {post.node.frontmatter!.categories?.map(x => `#${x}`)}
              </p>
            </div>
          </article>
        </Link>;
      })}
    </>)}
  />
)

export default BlogLister
