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
  Snippet,
} from "react-instantsearch-dom"

import algoliasearch from "algoliasearch/lite"
import BlogCard from "../BlogCard"
import './algolia.css'


export default function Search({ indices }) {
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID!,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY!
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

function Title(props) {
  return
}

function Description(props) {
  return
}

function Hit(props: any) {
  console.log(props)
  return (
    <BlogCard
      title={
        <Highlight attribute="title" hit={props.hit} />}
      slug={props.hit.fields.slug}
      excerpt={
        <Snippet attribute="excerpt" hit={props.hit} />}
      date={props.hit.date}
      categories={props.hit.categories}
      featuredImage={props.hit.featuredImage}
    >
    </BlogCard>
  );
}

