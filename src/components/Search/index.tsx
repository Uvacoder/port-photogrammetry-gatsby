import React, { ReactElement } from 'react'
import {
  InstantSearch,
  Pagination,
  PoweredBy
} from 'react-instantsearch-dom'

import Input from './input'
import { CustomHits } from './customHits'
import { Results } from './results'
import { createClient } from './searchClient'

interface SearchProps {
  indices: Index[];
  renderEmptyQuery: ReactElement;
  minAmountofCharacters: number;
}

interface Index {
  name: string;
  title: string;
  hitComp: string;
}

const Search: React.FC<SearchProps> = ({ indices, renderEmptyQuery, minAmountofCharacters }) => {
  const searchClient = createClient(minAmountofCharacters)

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
    >
      <Input />
      <Results renderEmptyQuery={renderEmptyQuery} minAmountofCharacters={minAmountofCharacters}>
        <CustomHits />
        <PoweredBy />
      </Results>
    </InstantSearch>
  )
}
export default Search
