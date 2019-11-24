// @ts-check
'use strict'

module.exports = {
  siteMetadata: {
    title: 'The Photogrammer',
    description: 'A blog about coding and photography',
    keywords: 'programming, photography',
    siteUrl: 'https://lucid-noether-af1c61.netlify.com',
    author: {
      name: 'Rick van Dam',
      url: 'https://github.com/barsonax'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              aliases: {
                cs: "csharp",
                posh: "powershell"
              },
            }
          },
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              linkImagesToOriginal: false,
              withWebp: true
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://lucid-noether-af1c61.netlify.com'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Photogrammer`,
        short_name: `Photogrammer`,
        start_url: `/`,
        background_color: `#ecedef`,
        theme_color: `#ecedef`,
        display: `standalone`,
        icon: `content/images/favicon.png`
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`],
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/index.xml",
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`,
  ]
}
