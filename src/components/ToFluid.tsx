import { FluidObject, FixedObject } from "gatsby-image"

export function ToFluid(data: any): FluidObject {
  return {
    aspectRatio: data.aspectRatio!,
    src: data.src!,
    srcSet: data.srcSet!,
    sizes: data.sizes!,
    base64: data.base64!,
    tracedSVG: data.tracedSVG!,
    srcWebp: data.srcWebp!,
    srcSetWebp: data.srcSetWebp!
  }
}
export function ToFixed(data: any): FixedObject {
  return {
    width: data.width!,
    height: data.height!,
    src: data.src,
    srcSet: data.srcSet,
    base64: data.base64!,
    tracedSVG: data.tracedSVG!,
    srcWebp: data.srcWebp!,
    srcSetWebp: data.srcSetWebp!
  }
}
