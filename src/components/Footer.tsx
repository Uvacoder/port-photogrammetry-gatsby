import * as React from 'react'
import classNames from 'classnames'
import { StaticQuery, graphql } from 'gatsby'
import { FooterQuery } from '../types'
import socialLinks from './svg-icons.module.css'

interface SocialIconProps {
  className: string
  href: string
  label: string
}

const SocialIcon: React.FC<SocialIconProps> = (data) =>
  <a aria-label={data.label} href={data.href}>
    <i className={classNames(socialLinks.svgIcon, data.className)}>
    </i>
  </a >

export const ComponentQuery = graphql`
query Footer {
  site {
    siteMetadata {
      social {
        github
        instagram
        linkedin
      }
    }
  }
}
`

const Footer: React.FC = () => (
  <StaticQuery
    query={ComponentQuery}
    render={(data: FooterQuery) => {
      return (<footer>
        <div className={socialLinks.svgIconContainer}>
          <SocialIcon className={socialLinks.github} href={`https://github.com/${data.site?.siteMetadata.social.github}`} label="Github"></SocialIcon>
          <SocialIcon className={socialLinks.instagram} href={`https://instagram.com/${data.site?.siteMetadata.social.instagram}`} label="Instagram"></SocialIcon>
          <SocialIcon className={socialLinks.linkedin} href={`https://www.linkedin.com/in/${data.site?.siteMetadata.social.linkedin}`} label="Linkedin"></SocialIcon>
        </div>
      </footer>)
    }}
  />
)

export default Footer
