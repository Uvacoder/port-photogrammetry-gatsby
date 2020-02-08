import * as React from 'react'
import { graphql } from 'gatsby'

import IndexLayout from '../layouts'
import PostDate from '../components/PostDate'
import Image from "gatsby-image"
import Main from '../components/Main'
import Footer from '../components/Footer'

import { Disqus } from 'gatsby-plugin-disqus'
import BlogCard from '../components/BlogCard'
import { PageTemplateQuery } from '../types'

interface PageTemplateQueryInterface {
  data: PageTemplateQuery
}

const PageTemplate: React.SFC<PageTemplateQueryInterface> = ({ data }) => {
  var blogImage = data.markdownRemark?.frontmatter.featuredImage?.src.childImageSharp?.fluid;
  var date = data.markdownRemark?.frontmatter.date;

  let disqusConfig = {
    url: `${data.site?.siteMetadata.siteUrl + data.sitePage?.path}`,
    identifier: data.sitePage?.path,
    title: data.markdownRemark?.frontmatter.title,
  }
  return (<>
    <IndexLayout></IndexLayout>
    <Main className="content side-text-padding">
      <article className="post">
        <header className="post-header">
          <h1 className="post-title">
            {data.markdownRemark?.frontmatter.title}
          </h1>
          {date !== null && <PostDate date={data.markdownRemark?.frontmatter.date} className="post-date"></PostDate>}
        </header>
        {blogImage !== null && blogImage !== undefined && <Image fluid={blogImage} alt={data.markdownRemark.frontmatter.featuredImage.description} />}
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark?.html }} />
        <Disqus config={disqusConfig} />
      </article>
    </Main>
    <nav className="end-nav side-padding">
      {data.sitePage?.context.previous !== null && <BlogCard
        title={data.sitePage?.context.previous.node.frontmatter.title}
        slug={data.sitePage?.context.previous.node.fields.slug}
        description={data.sitePage?.context.previous.node.frontmatter.description!}
        excerpt={data.sitePage?.context.previous.node.excerpt} date={data.sitePage?.context.previous.node.frontmatter.date}
        categories={data.sitePage?.context.previous.node.frontmatter.categories!}
        blogImage={data.sitePage?.context.previous.node.frontmatter.featuredImage?.src?.childImageSharp?.fixed}
        blogImageDescription={data.sitePage?.context.previous.node.frontmatter.featuredImage?.description!}>
      </BlogCard>}
    </nav>

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
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
  sitePage(context: {slug: {eq: $slug}}) {
    path
    context {
      previous {
        node {
          fields {
            slug
          }
        frontmatter {
          title
          draft
          date
          categories
          description
          featuredImage {
            description
            src {
              childImageSharp {
                fixed {
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
}
  `
