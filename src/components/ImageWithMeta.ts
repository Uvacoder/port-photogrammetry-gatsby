import { IGatsbyImageData } from "gatsby-plugin-image";

export default interface ImageWithMeta {
  data: IGatsbyImageData;
  description: string;
}

export function toImageWithMeta(featuredImage: any): ImageWithMeta | undefined {
  const data = featuredImage?.src.childImageSharp?.gatsbyImageData
  const description = featuredImage?.description!
  if (data) {
    return {
      data,
      description
    }
  }
  return undefined
}
