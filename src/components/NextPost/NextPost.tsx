import * as React from 'react'
import styles from './NextPost.module.css'
import classNames from 'classnames'
import FeaturedImage from './../FeaturedImage'
import BlogCard from '../BlogCard/BlogCard'

interface NextPostProps {
  title: string
  slug: string
  description: string
  excerpt: string
  date: string
  categories: string[]
  featuredImage: FeaturedImage
}

const NextPost: React.FC<NextPostProps> = (props) =>
  <nav className={classNames(styles.endNav, 'side-padding')}>
    <BlogCard
      title={props.title}
      slug={props.slug}
      description={props.description}
      excerpt={props.excerpt}
      date={props.date}
      categories={props.categories}
      featuredImage={props.featuredImage}>
    </BlogCard>
  </nav>

export default NextPost
