import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { BlogListerQuery } from '../types'
import Image from "gatsby-image"
import { ToFixed } from './ToFluid'
import PostDate from './PostDate'

export const ComponentQuery = graphql`
query BlogLister {
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
          description
          resources {
            params {
              description
          }
        	src {
          	childImageSharp {
      				fixed (width: 276, quality:50){
        				src
        				srcSet
        				base64
      				}
          	}
          }
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
    render={(data: BlogListerQuery) => (<>
      {data.allMarkdownRemark.edges.map(post => {
        var blogImage = post.node.frontmatter?.resources?.[0]?.src?.childImageSharp?.fixed;
        return <a className="card blog-card" href={post.node.fields!.slug!}>

          {blogImage !== null && blogImage !== undefined && <Image className="card-img-container" fixed={ToFixed(blogImage)} alt="" />}
          <article className="card-body">
            <h2 className="card-title">{post.node.frontmatter!.title}</h2>
            <p className="card-text">{post.node.frontmatter!.description ?? post.node.excerpt}</p>
            <div className="card-subtext muted-text">
              <PostDate date={post.node.frontmatter!.date}></PostDate>
              <p>
                {post.node.frontmatter!.categories!.map(x => `#${x}`)}
              </p>
            </div>
          </article>
        </a>;
      })}
    </>)}
  />
)

export default BlogLister
