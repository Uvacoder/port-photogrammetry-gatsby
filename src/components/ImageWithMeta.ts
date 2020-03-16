import { FluidObject } from 'gatsby-image';

export default interface ImageWithMeta {
  data: FluidObject;
  description: string;
}

export function toImageWithMeta(featuredImage: any): ImageWithMeta | undefined {
  const data = featuredImage?.src.childImageSharp?.fluid
  const description = featuredImage?.description!
  if (data) {
    return {
      data,
      description
    }
  }
  return undefined
}
