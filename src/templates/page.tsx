import * as React from 'react'
import { graphql } from 'gatsby'

import IndexLayout from '../layouts'
import PostDate from '../components/PostDate'
import { FluidObject } from 'gatsby-image'
import Image from "gatsby-image"
import Main from '../components/Main'
import Footer from '../components/Footer'

import { Disqus } from 'gatsby-plugin-disqus'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        siteUrl: string
      }
    }
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
  var date = data.markdownRemark.frontmatter.date;
  let disqusConfig = {
    url: `${data.site.siteMetadata.siteUrl + location.pathname}`,
    identifier: location.pathname,
    title: data.markdownRemark.frontmatter.title,
  }
  return (<>
    <IndexLayout></IndexLayout>
    <Main className="content side-text-padding">
      <article className="post">
        <header className="post-header">
          <h1 className="post-title">
            {data.markdownRemark.frontmatter.title}
          </h1>
          {date !== null && <PostDate date={data.markdownRemark.frontmatter.date} className="post-date"></PostDate>}
        </header>
        {blogImage !== null && blogImage !== undefined && <Image fluid={blogImage} alt={data.markdownRemark.frontmatter.featuredImage.description} />}
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        <Disqus config={disqusConfig} />
      </article>
    </Main>
    <Footer></Footer>
  </>)
}

export default PageTemplate

export const query = graphql`
query PageTemplate($slug: String!) {
  site {
    siteMetadata {
      siteUrl
    }
  }
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
