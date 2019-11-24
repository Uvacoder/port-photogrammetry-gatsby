import * as React from 'react'
import { graphql } from 'gatsby'

import IndexLayout from '../layouts'
import PostDate from '../components/PostDate'
import { FluidObject } from 'gatsby-image'
import Image from "gatsby-image"

interface PageTemplateProps {
  data: {
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
        date: string
        featuredImage: {
          description: string
          src: {
            childImageSharp: {
              fluid: FluidObject
            }
          }
        }
      }
    }
  }
}

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => {
  var blogImage = data.markdownRemark.frontmatter.featuredImage?.src.childImageSharp.fluid;
  return (<>
    <IndexLayout></IndexLayout>
    <main className="content side-text-padding">
      <article className="post">
        <header className="post-header">
          <h1 className="post-title">
            {data.markdownRemark.frontmatter.title}
          </h1>
          <PostDate date={data.markdownRemark.frontmatter.date} className="post-date"></PostDate>
        </header>
        {blogImage !== null && blogImage !== undefined && <Image fluid={blogImage} alt={data.markdownRemark.frontmatter.featuredImage.description} />}
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </article>
    </main>
  </>)
}

export default PageTemplate

export const query = graphql`
query PageTemplate($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    excerpt
    frontmatter {
      title
      date(formatString: "D-MM-YYYY")
      featuredImage {
        description
        src {
          childImageSharp {
            fluid(quality: 50) {
              src
              srcSet
              srcSetWebp
              srcWebp
              sizes
              aspectRatio
              base64
            }
          }
        }
      }
    }
  }
}
  `
