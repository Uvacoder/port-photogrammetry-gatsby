import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { BlogListerQuery } from '../types'
import Img from "gatsby-image"
import { ToFluid, ToFixed } from './ToFluid'

export const ComponentQuery = graphql`
query BlogLister {
  imageOne: file(relativePath: { eq: "images/reinterpretcode.jpg" }) {
    childImageSharp{
      fixed (width: 276, height: 266, quality:50){
        src
        srcSet
        width
        height
        base64
      }
    }
  }
  allMarkdownRemark {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          title
          date
          tags
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
const ImgStyle = {
  margin: "0"
}
//<Img fluid={post.node.frontmatter!.resources![0]!.src!} alt="" />
const BlogLister: React.FC = () => (
  <StaticQuery
    query={ComponentQuery}
    render={(data: BlogListerQuery) => (
      <>
        {data.allMarkdownRemark.edges.map(post =>
          <a className="card blog-card" href={post.node.fields!.slug!}>
            <Img imgStyle={ImgStyle} fixed={ToFixed(data.imageOne!.childImageSharp!.fixed)} alt="" />
            <article className="card-body">
              <h2 className="card-title">{post.node.frontmatter!.title}</h2>
              <p className="card-text">{post.node.excerpt}</p>
              <div className="card-subtext muted-text">
                <p>Posted:
                  <time dateTime={post.node.frontmatter!.date}>

                  </time>
                </p>
                <p>
                  {post.node.frontmatter!.tags}
                </p>
              </div>
            </article>
          </a>)}
      </>
    )}
  />
)

export default BlogLister
