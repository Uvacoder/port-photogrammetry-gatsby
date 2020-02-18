import * as React from 'react'
import { graphql } from 'gatsby'

import IndexLayout from '../layouts'
import Main from '../components/Main'
import Footer from '../components/Footer'

import { PageTemplateQuery } from '../types'
import Article from '../components/Article/Article'
import BottomNav from '../components/BottomNav/BottomNav'
import BlogCard from '../components/BlogCard/BlogCard'

interface PageTemplateQueryInterface {
  data: PageTemplateQuery
}

const PageTemplate: React.SFC<PageTemplateQueryInterface> = ({ data: { site, sitePage, markdownRemark } }) => {
  if (sitePage === null) return (<></>);
  if (site === null) return (<></>);

  const disqusConfig = {
    url: `${site.siteMetadata.siteUrl + sitePage.path}`,
    identifier: sitePage.path,
    title: markdownRemark?.frontmatter.title!,
  }
  return (<>
    <IndexLayout />
    <Main className="content side-text-padding">
      <Article title={markdownRemark?.frontmatter.title!}
        date={markdownRemark?.frontmatter.date}
        excerpt={markdownRemark?.html!}
        disqusConfig={disqusConfig}
        featuredImage={{
          data: markdownRemark?.frontmatter.featuredImage?.src.childImageSharp?.fluid!,
          description: markdownRemark?.frontmatter.featuredImage?.description!
        }}>
      </Article>
    </Main>

    {sitePage.context.previous !== null &&
      <BottomNav>
        <BlogCard
          title={sitePage.context.previous.node.frontmatter.title}
          slug={sitePage.context.previous.node.fields.slug}
          description={sitePage.context.previous.node.frontmatter.description!}
          excerpt={sitePage.context.previous.node.excerpt}
          date={sitePage.context.previous.node.frontmatter.date}
          categories={sitePage.context.previous.node.frontmatter.categories!}
          featuredImage={{
            data: sitePage.context.previous.node.frontmatter.featuredImage?.src?.childImageSharp?.fluid,
            description: sitePage.context.previous.node.frontmatter.featuredImage?.description
          }}>
        </BlogCard>
      </BottomNav>
    }
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
                fluid {
                  srcWebp
                  srcSetWebp
                  src
                  srcSet
                  sizes
                  base64
                  aspectRatio
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
