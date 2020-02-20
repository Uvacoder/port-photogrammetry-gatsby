import * as React from 'react'
import { graphql } from 'gatsby'
import Main from '../components/Main'
import IndexLayout from '../layouts'
import ListHeader from '../components/ListHeader/ListHeader'
import BlogLister from '../components/BlogPostLister'
import Footer from '../components/Footer'
import { PostListerTemplateQuery } from '../types'

interface PostListerTemplateQueryInterface {
  data: PostListerTemplateQuery
}

const PostListerTemplate: React.SFC<PostListerTemplateQueryInterface> = ({ data: { sitePage } }) => (
  <>
    <IndexLayout />
    <Main className="card-container">
      <ListHeader title=""></ListHeader>
      <BlogLister category={[...sitePage?.context.category ?? []]}></BlogLister>
    </Main>
    <Footer></Footer>
  </>
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
