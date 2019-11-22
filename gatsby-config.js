'use strict'

module.exports = {
  siteMetadata: {
    title: 'The Photogrammer',
    description: 'A blog about coding and photography',
    keywords: 'programming, photography',
    siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
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
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
