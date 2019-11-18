import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ImageQuery } from '../types'
import Img from "gatsby-image"
import { ToFixed } from './ToFluid'

export const ComponentQuery = graphql`
query Image($src: String) {
  imageOne: file(relativePath: { eq: $src }) {
    childImageSharp{
      fixed (width: 276, quality:50){
        src
        srcSet
        width
        base64
      }
    }
  }
}
`

interface ImageProps {
  src: string
  alt: string
  className?: string
}

const Image: React.FC<ImageProps> = ({ src, className }) => (
  <StaticQuery
    query={ComponentQuery}
    render={(data: ImageQuery) => (
      <Img className="card-img-container" fixed={ToFixed(data.imageOne!.childImageSharp!.fixed)} alt="" />
    )}
  />
)

export default Image
