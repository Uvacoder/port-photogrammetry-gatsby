import * as React from 'react'

interface PostDataProps {
  date: any
  className: string
}

const PostDate: React.SFC<PostDataProps> = ({ date, className }) => (
  <p className={className!}>Posted
    <time> {date}</time>
  </p>
)

export default PostDate
