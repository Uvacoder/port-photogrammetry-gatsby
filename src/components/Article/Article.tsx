import * as React from 'react'
import { FluidObject } from 'gatsby-image'
import styles from './Article.module.css'
import { Disqus } from 'gatsby-plugin-disqus'
import PostDate from '../PostDate'
import Image from 'gatsby-image'
import { FeaturedImage } from './FeaturedImage'

interface DisqusConfig {
  url: string
  identifier: string
  title: string
}

interface ArticleProps {
  title: string
  date: string
  featuredImage: FeaturedImage
  blogImage?: FluidObject
  excerpt: string
  disqusConfig: DisqusConfig
}

const Article: React.FC<ArticleProps> = (props) =>
  <article className={styles.post}>
    <header className={styles.postHeader}>
      <h1 className={styles.postTitle}>
        {props.title}
      </h1>
      {props.date !== null && <PostDate date={props.date} className={styles.postDate}></PostDate>}
    </header>
    {props.blogImage !== null && props.blogImage !== undefined && <Image fluid={props.featuredImage.data} alt={props.featuredImage.description} />}
    <div dangerouslySetInnerHTML={{ __html: props.excerpt }} />
    <Disqus config={props.disqusConfig} />
  </article>

export default Article
