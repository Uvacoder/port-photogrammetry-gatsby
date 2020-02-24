import * as React from 'react'
import { graphql } from 'gatsby'
import IndexLayout from '../layouts'
import ListHeader from '../components/ListHeader'
import { PostListerTemplateQuery } from '../types'
import Search from "../components/Search"

const searchIndices = [
  { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

interface PostListerTemplateQueryInterface {
  data: PostListerTemplateQuery
}

const SearchPageTemplate: React.SFC<PostListerTemplateQueryInterface> = ({ data: { sitePage } }) => (
  <IndexLayout>
    <ListHeader title=""></ListHeader>
    <Search indices={searchIndices} />
  </IndexLayout>
)

export default SearchPageTemplate

export const query = graphql`
query SearchPageTemplate($slug: String!) {
  sitePage(path: {eq: $slug}) {
    context {
        category
      }
    }
  } `
