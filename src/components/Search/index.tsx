import React from "react"
import {
  InstantSearch,
  Hits,
  Pagination,
  PoweredBy,
} from "react-instantsearch-dom"

import Input from "./Input"
import algoliasearch from "algoliasearch/lite"
import BlogCard from "../BlogCard"
//import './algolia.css'
import CardContainer from "../CardContainer"
import { CustomSnippet } from "./customSnippet"
import { CustomHighlight } from "./customHighlight"

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
      <CardContainer>
        <Input />
        <Hits hitComponent={Hit} />
      </CardContainer>
      <PoweredBy />
    </InstantSearch >
  )
}

function Hit(props: any) {
  return (
    <BlogCard
      title={
        <CustomHighlight attribute="title" hit={props.hit} />}
      slug={props.hit.fields.slug}
      excerpt={
        <CustomSnippet attribute="excerpt" hit={props.hit} />}
      date={props.hit.date}
      categories={props.hit.categories}
      featuredImage={props.hit.featuredImage}
    >
    </BlogCard>
  );
}

