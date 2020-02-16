import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { IndexLayoutQuery } from '../types'

import 'normalize.css'

import Navigation from '../components/Navigation'

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery<IndexLayoutQuery>
    query={graphql`
      query IndexLayout {
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
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `}
    render={(data: IndexLayoutQuery) => (
      <>
        <Helmet
          htmlAttributes={{
            lang: "en",
          }}
          title={data.site?.siteMetadata.title}
        >
          <meta name="description" content={data.site?.siteMetadata.description} />
          <meta name="keywords" content={data.site?.siteMetadata.keywords} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={data.site?.siteMetadata.title} />
          <meta property="og:image" content={data.site?.siteMetadata.siteUrl + data.file?.childImageSharp?.fixed?.src} />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="400" />
        </Helmet>
        <Navigation></Navigation>
        {children}
      </>
    )}
  />
)

export default IndexLayout
