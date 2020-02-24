import React from "react"
import {
  InstantSearch,
  Pagination,
  PoweredBy,
} from "react-instantsearch-dom"

import Input from "./input"
import algoliasearch from "algoliasearch/lite"
import { CustomHits } from "./customHits"

interface SearchProps {
  indices: Index[]
}

interface Index {
  name: string;
  title: string;
  hitComp: string;
}

const Search: React.FC<SearchProps> = ({ indices }) => {
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID!,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY!
  )
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[1].name}
    >
      <Input />
      <CustomHits />
      <PoweredBy />
    </InstantSearch >
  )
}
export default Search
