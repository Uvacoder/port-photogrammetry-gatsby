import * as React from 'react'
import { Link } from 'gatsby'
import Img, { FixedObject } from "gatsby-image"
import PostDate from './PostDate'

interface BlogCardProps {
  title: string
  slug: string
  description: string
  excerpt: string
  date: string
  categories?: readonly string[]
  blogImage: FixedObject
  blogImageDescription: string
}

const BlogCard: React.FC<BlogCardProps> = (props) =>
  <Link className="card blog-card" to={props.slug}>
    {props.blogImage !== null && props.blogImage !== undefined && <Img className="card-img-container" fixed={props.blogImage} alt={props.blogImageDescription} />}
    <article className="card-body">
      <h2 className="card-title">{props.title}</h2>
      <p className="card-text">{props.description ?? props.excerpt}</p>
      <div className="card-subtext muted-text">
        <PostDate date={props.date}></PostDate>
        <p>
          {props.categories?.map(x => `#${x}`)}
        </p>
      </div>
    </article>
  </Link>

export default BlogCard
