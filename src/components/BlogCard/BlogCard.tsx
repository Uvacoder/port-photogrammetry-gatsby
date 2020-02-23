import * as React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"
import PostDate from '../PostDate'
import styles from './BlogCard.module.css'
import classNames from 'classnames'
import ImageWithMeta from '../ImageWithMeta'
import { ReactNode } from 'react'

interface BlogCardProps {
  title: string | ReactNode
  slug: string
  description?: string
  excerpt: string | ReactNode
  date: string
  categories: readonly string[]
  featuredImage?: ImageWithMeta
}

const BlogCard: React.FC<BlogCardProps> = (props) =>
  <Link className={classNames(styles.card, styles.blogCard)} to={props.slug}>
    {props.featuredImage !== null && props.featuredImage !== undefined && <Img className={styles.cardImgContainer} fluid={props.featuredImage.data} alt={props.featuredImage.description} />}
    <article className={styles.cardBody}>
      <h2 className={styles.cardTitle}>{props.title}</h2>
      <p className={styles.cardText}>{props.description ?? props.excerpt}</p>
      <div className={classNames(styles.cardSubtext, styles.mutedText)}>
        <PostDate date={props.date}></PostDate>
        <p>
          {props.categories?.map(x => `#${x}`)}
        </p>
      </div>
    </article>
  </Link>

export default BlogCard
