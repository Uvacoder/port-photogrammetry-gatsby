import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { BlogListerQuery } from '../types'
import Image from "gatsby-image"
import { ToFixed } from './ToFluid'

export const ComponentQuery = graphql`
query BlogLister {
  imageOne: file(relativePath: { eq: "images/reinterpretcode.jpg" }) {
    childImageSharp{
      fixed (width: 276, quality:50){
        src
        srcSet
        width
        base64
      }
    }
  }
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "D MMM, YYYY")
          tags
          categories
          description
          resources {
            params {
              description
            }
            src
            name
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
    render={(data: BlogListerQuery) => (
      <>
        {data.allMarkdownRemark.edges.map(post =>
          <a className="card blog-card" href={post.node.fields!.slug!}>
            <Image className="card-img-container" fixed={ToFixed(data.imageOne!.childImageSharp!.fixed)} alt="" />
            <article className="card-body">
              <h2 className="card-title">{post.node.frontmatter!.title}</h2>
              <p className="card-text">{post.node.frontmatter!.description || post.node.excerpt}</p>
              <div className="card-subtext muted-text">
                <p>Posted
                  <time> {post.node.frontmatter!.date}</time>
                </p>
                <p>
                  {post.node.frontmatter!.categories!.map(x => `#${x}`)}
                </p>
              </div>
            </article>
          </a>)}
      </>
    )}
  />
)

export default BlogLister
