import * as React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { NavigationQuery } from '../types'

export const ComponentQuery = graphql`
query Navigation {
  site {
    siteMetadata {
      title
      description
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
        }
        excerpt
      }
    }
  }
}
`

const hamburgerMenuPressed = (element: any) => {
  if (element.parentNode.classList.contains('hamburger-menu-open')) {
    document.body.classList.remove('no-scroll');
    element.parentNode.classList.remove('hamburger-menu-open')
    element.setAttribute('aria-expanded', "false");
  } else {
    document.body.classList.add('no-scroll');
    element.parentNode.classList.add('hamburger-menu-open')
    element.setAttribute('aria-expanded', "true");
  }
}

const Navigation: React.FC = () => (
  <StaticQuery
    query={ComponentQuery}
    render={(data: NavigationQuery) => {
      return <nav className="nav-bar side-padding" >
        <h1 className="nav-header">
          <Link to="/" className="nav-text">{data.site?.siteMetadata?.title}</Link>
        </h1>
        <div className="hamburger-menu">
          <button onClick={e => hamburgerMenuPressed(e.currentTarget)} aria-haspopup="true" aria-expanded="false" aria-controls="menu" aria-label="Menu">
            <span>
            </span>
            <span>
            </span>
          </button>
          <ul id="menu" className="hamburger-menu-overlay">
            <li>
              <Link onClick={e => hamburgerMenuPressed(e.currentTarget.parentElement?.parentElement)} to="/" className="hamburger-menu-overlay-link">Home</Link>
            </li>
            <li>
              <Link onClick={e => hamburgerMenuPressed(e.currentTarget.parentElement?.parentElement)} to="/about-me/" className="hamburger-menu-overlay-link">About Me</Link>
            </li>
            <li>
              <a onClick={e => hamburgerMenuPressed(e.currentTarget.parentElement?.parentElement)} href="/categories/photography" className="hamburger-menu-overlay-link">Photography</a>
            </li>
            <li>
              <a onClick={e => hamburgerMenuPressed(e.currentTarget.parentElement?.parentElement)} href="/categories/programming" className="hamburger-menu-overlay-link">Programming</a>
            </li>
            <li>
              <a onClick={e => hamburgerMenuPressed(e.currentTarget.parentElement?.parentElement)} href="/rss.xml" className="hamburger-menu-overlay-link">rss</a>
            </li>
          </ul>
        </div>
      </nav >
    }}
  />
)

export default Navigation
