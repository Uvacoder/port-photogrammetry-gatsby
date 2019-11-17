import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { NavigationQuery } from '../types'


export const ComponentQuery = graphql`
query Navigation {
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
//onlick="hamburgerMenuPressed.call(this)"
const Navigation: React.FC = () => (
  <StaticQuery
    query={ComponentQuery}
    render={(data: NavigationQuery) => (
      <nav className="nav-bar side-padding" >
        <h1 className="nav-header">
          <a href="https://www.the-photographing-programmer.com" className="nav-text">The Photogrammer
      </a>
        </h1>
        <div className="hamburger-menu">
          <button aria-haspopup="true" aria-expanded="false" aria-controls="menu" aria-label="Menu">
            <span>
            </span>
            <span>
            </span>
          </button>
          <ul id="menu" className="hamburger-menu-overlay">
            <li>
              <a href="https://www.the-photographing-programmer.com" className="hamburger-menu-overlay-link">Home</a>
            </li>
            <li>
              <a href="https://www.the-photographing-programmer.com/about-me/" className="hamburger-menu-overlay-link">About Me
              </a>
            </li>
            <li>
              <a href="https://www.the-photographing-programmer.com/categories/photography" className="hamburger-menu-overlay-link">Photography</a>
            </li>
            <li>
              <a href="https://www.the-photographing-programmer.com/categories/programming" className="hamburger-menu-overlay-link">Programming</a>
            </li>
            <li>
              <a href="https://www.the-photographing-programmer.com/index.xml" className="hamburger-menu-overlay-link">rss</a>
            </li>
          </ul>
        </div>
      </nav >
    )}
  />
)

export default Navigation
