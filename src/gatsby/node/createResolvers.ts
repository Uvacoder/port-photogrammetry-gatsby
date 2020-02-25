
import { GatsbyNode, CreateResolversArgs } from "gatsby"

// @ts-ignore
export const createResolvers: GatsbyNode["createResolvers"] = ({ createResolvers }: CreateResolversArgs) => {
  const resolvers = {
    Frontmatter: {
      categories: {
        // @ts-ignore
        resolve(source, args, context, info) {
          if (source.categories) {
            return source.categories
          }
          return []
        },
      },
    },
  }
  createResolvers(resolvers)
}
