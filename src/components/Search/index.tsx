import React, { ReactElement } from "react"
import {
  InstantSearch,
  Pagination,
  PoweredBy,
} from "react-instantsearch-dom"

import Input from "./input"
import algoliasearch from "algoliasearch/lite"
import { CustomHits } from "./customHits"
import { Results } from "./results"

interface SearchProps {
  indices: Index[]
  renderEmptyQuery: ReactElement
}

interface Index {
  name: string;
  title: string;
  hitComp: string;
}

const Search: React.FC<SearchProps> = ({ indices, renderEmptyQuery }) => {
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID!,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY!
  )
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
    >
      <Input />
      <Results renderEmptyQuery={renderEmptyQuery}>
        <CustomHits />
        <PoweredBy />
      </Results>
    </InstantSearch >
  )
}
export default Search
