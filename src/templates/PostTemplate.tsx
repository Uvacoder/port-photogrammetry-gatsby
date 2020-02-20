import * as React from 'react'
import { graphql } from 'gatsby'

import IndexLayout from '../layouts'
import Main from '../components/Main'
import Footer from '../components/Footer'

import { PageTemplateQuery, FeaturedImage } from '../types'
import Article from '../components/Article/Article'
import BottomNav from '../components/BottomNav/BottomNav'
import BlogCard from '../components/BlogCard/BlogCard'
import { toImageWithMeta } from '../components/ImageWithMeta'

interface PageTemplateQueryInterface {
  data: PageTemplateQuery
}

const PostTemplate: React.SFC<PageTemplateQueryInterface> = ({ data: { site, sitePage, markdownRemark } }) => {
  if (sitePage === null) return (<></>);
  if (site === null) return (<></>);
  if (markdownRemark === null) return (<></>);

  const disqusConfig = {
    url: `${site.siteMetadata.siteUrl + sitePage.path}`,
    identifier: sitePage.path,
    title: markdownRemark.frontmatter.title!,
  }
  return (<>
    <IndexLayout />
    <Main className="content side-text-padding">
      <Article title={markdownRemark.frontmatter.title!}
        date={markdownRemark.frontmatter.date}
        excerpt={markdownRemark.html!}
        disqusConfig={disqusConfig}
        featuredImage={toImageWithMeta(markdownRemark.frontmatter.featuredImage)}>
      </Article>
    </Main>

    {sitePage.context.previous !== null &&
      <BottomNav>
        <BlogCard
          title={sitePage.context.previous.frontmatter.title}
          slug={sitePage.context.previous.fields.slug}
          description={sitePage.context.previous.frontmatter.description!}
          excerpt={sitePage.context.previous.excerpt!}
          date={sitePage.context.previous.frontmatter.date}
          categories={sitePage.context.previous.frontmatter.categories}
          featuredImage={toImageWithMeta(sitePage.context.previous.frontmatter.featuredImage)}>
        </BlogCard>
      </BottomNav>
    }
    <Footer></Footer>
  </>)
}

export default PostTemplate

export const query = graphql`
query PostTemplate($slug: String!) {
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
  sitePage(path: {eq: $slug}) {
    path
    context {
      previous {
        fields {
          slug
        }
        frontmatter {
          title
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
