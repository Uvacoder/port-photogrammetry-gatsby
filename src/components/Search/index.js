import React from "react"
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"
import './algolia.css'


export default function Search({ indices }) {
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[1].name}
    >
      <SearchBox />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  )
}

function Hit(props) {
  return (
    <div>
      <div className="hit-name">
        <a href={props.hit.fields.slug}>
          <Highlight attribute="title" hit={props.hit} />
        </a>
      </div>
      <div className="hit-description">
        <Highlight attribute="excerpt" hit={props.hit} />
      </div>
    </div>
  );
}
