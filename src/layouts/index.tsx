import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'normalize.css'

import Navigation from '../components/Navigation'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
      siteUrl: string
    }
  }
  file: {
    childImageSharp: {
      fixed: {
        src: string
      }
    }
  }
}

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
            keywords
            siteUrl
          }
        }
        file(name: {eq: "favicon"} ext: {eq: ".png"}) {
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <>
        <Helmet
          htmlAttributes={{
            lang: "en",
          }}
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords }
          ]}
        >
          <meta property="og:type" content="article" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:image" content={data.site.siteMetadata.siteUrl + data.file.childImageSharp.fixed.src} />
        </Helmet>
        <Navigation></Navigation>
        {children}
      </>
    )}
  />
)

export default IndexLayout
