import * as React from 'react'
import { graphql } from 'gatsby'
import IndexLayout from '../layouts'
import ListHeader from '../components/ListHeader/ListHeader'
import BlogLister from '../components/BlogPostLister/BlogPostLister'
import { PostListerTemplateQuery } from '../types'

interface PostListerTemplateQueryInterface {
  data: PostListerTemplateQuery
}

const PostListerTemplate: React.SFC<PostListerTemplateQueryInterface> = ({ data: { sitePage } }) => (
  <IndexLayout>
    <ListHeader title=""></ListHeader>
    <BlogLister category={[...sitePage?.context.category ?? []]}></BlogLister>
  </IndexLayout>
)

export default PostListerTemplate

export const query = graphql`
query PostListerTemplate($slug: String!) {
  sitePage(path: {eq: $slug}) {
    context {
        category
      }
    }
  } `
