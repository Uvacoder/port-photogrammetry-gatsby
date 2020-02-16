import { GatsbyNode } from "gatsby"

// @ts-ignore
export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = async ({ actions: { createFieldExtension, createTypes } }) => {
  const typeDefs = `
  type MarkdownRemarkFrontmatterFeaturedImage @infer{
      src: File! @fileByDataPath
    }
    type Frontmatter @infer {
      title: String!
      categories: [String!]
      tags: [String!]
      featuredImage: MarkdownRemarkFrontmatterFeaturedImage
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

    type SiteSiteMetadata{
      title: String!
      siteUrl: String!
      description: String!
      keywords: String!
      author: SiteSiteMetadataAuthor!
      social: SiteSiteMetadataSocial!
    }

    type SiteSiteMetadataSocial{
      github: String
      instagram: String
      linkedin: String
    }

    type SiteSiteMetadataAuthor{
      name: String!
      url: String!
    }

    type Site implements Node @infer {
      siteMetadata: SiteSiteMetadata!
    }

    type SitePage{
      context: SitePageContext!
    }

    type SitePageContext{
      slug: String
    }

    type SitePageContextPrevious{
      node: SitePageContextPreviousNode!
    }

    type SitePageContextPreviousNode{
      fields: SitePageContextPreviousNodeFields!
      frontmatter: SitePageContextPreviousNodeFrontmatter!
      excerpt: String!
    }

    type SitePageContextPreviousNodeFields{
      layout: String!
      slug: String!
    }

    type SitePageContextPreviousNodeFrontmatter{
      title: String!
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
