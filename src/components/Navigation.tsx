import * as React from 'react'
import { useState, useEffect } from 'react';
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
}
`

const Navigation: React.FC = () => (
  <StaticQuery
    query={ComponentQuery}
    render={(data: NavigationQuery) => {
      const [menuOpen, setMenuOpen] = useState(false);

      useEffect(() => {
        if (menuOpen) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }
      }, [menuOpen])

      return <nav className="nav-bar side-padding" >
        <h1 className="nav-header">
          <Link to="/" className="nav-text">{data.site?.siteMetadata.title}</Link>
        </h1>
        <div className={menuOpen ? 'hamburger-menu hamburger-menu-open' : "hamburger-menu"}>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-haspopup="true" aria-expanded={menuOpen} aria-controls="menu" aria-label="Menu">
            <span>
            </span>
            <span>
            </span>
          </button>
          <ul id="menu" className="hamburger-menu-overlay">
            <li>
              <Link onClick={() => setMenuOpen(false)} to="/" className="hamburger-menu-overlay-link">Home</Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpen(false)} to="/about-me/" className="hamburger-menu-overlay-link">About Me</Link>
            </li>
            <li>
              <a onClick={() => setMenuOpen(false)} href="/categories/photography" className="hamburger-menu-overlay-link">Photography</a>
            </li>
            <li>
              <a onClick={() => setMenuOpen(false)} href="/categories/programming" className="hamburger-menu-overlay-link">Programming</a>
            </li>
            <li>
              <a onClick={() => setMenuOpen(false)} href="/index.xml" className="hamburger-menu-overlay-link">rss</a>
            </li>
          </ul>
        </div>
      </nav >
    }}
  />
)

export default Navigation
