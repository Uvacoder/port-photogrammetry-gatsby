import React from 'react'
import { graphql } from 'gatsby'
import IndexLayout from '../layouts'
import ListHeader from '../components/ListHeader'
import BlogLister from '../components/BlogPostLister'
import { PostListerTemplateQuery } from '../types'
import CardContainer from '../components/CardContainer'
import Search from '../components/Search'

interface PostListerTemplateQueryInterface {
  data: PostListerTemplateQuery
}

const searchIndices = [
  { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
]


const PostListerTemplate: React.SFC<PostListerTemplateQueryInterface> = ({ data: { sitePage } }) => {
  return <IndexLayout>
    <ListHeader title=""></ListHeader>
    <CardContainer>
      <Search indices={searchIndices} renderEmptyQuery={
        <BlogLister category={[...sitePage?.context.category ?? []]}></BlogLister>
      } />
    </CardContainer>
  </IndexLayout>
}

export default PostListerTemplate

export const query = graphql`
query PostListerTemplate($slug: String!) {
  sitePage(path: {eq: $slug}) {
    context {
        category
      }
    }
  } `
