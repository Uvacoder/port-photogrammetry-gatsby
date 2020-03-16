import { GatsbyNode } from "gatsby"

// @ts-ignore
export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = async ({ actions: { createFieldExtension, createTypes } }) => {
  const typeDefs = `
  type FeaturedImage @infer{
      src: File! @fileByDataPath
      description: String
    }
    type Frontmatter @infer {
      title: String!
      categories: [String!]!
      tags: [String!]
      featuredImage: FeaturedImage
    }
    type MarkdownRemark implements Node @infer {
      frontmatter: Frontmatter!
      fields: MarkdownRemarkFields!
      html: String!
    }
    type MarkdownRemarkFields {
      slug: String!
      title: String!
      layout: String!
    }

    type Site implements Node @infer {
      siteMetadata: SiteMetadata!
    }

    type SiteMetadata{
      title: String!
      siteUrl: String!
      description: String!
      keywords: String!
      author: Author!
      social: Social!
    }

    type Social{
      github: String
      instagram: String
      linkedin: String
    }

    type Author{
      name: String!
      url: String!
    }

    type SitePage{
      context: SitePageContext!
    }

    type SitePageContext{
      slug: String
      previous: MarkdownRemark
      next: MarkdownRemark
    }
  `

  createTypes(typeDefs)

  // @ts-ignore
  createFieldExtension({
    name: 'fileByDataPath',
    extend: () => ({
      // @ts-ignore
      resolve: function (featureImage, args, context, info) {
        let partialPath = featureImage.src
        if (!partialPath) {
          return null
        }

        const regex = "/(/static/" + partialPath + ")/"
        const fileNode = context.nodeModel.runQuery({
          firstOnly: true,
          type: 'File',
          query: {
            filter: {
              absolutePath: {
                regex: regex
              }
            }
          }
        })

        if (!fileNode) {
          return null
        }

        return fileNode
      }
    })
  })
}
