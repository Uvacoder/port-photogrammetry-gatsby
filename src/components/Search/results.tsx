import React, { ReactElement } from 'react'
import {
  connectStateResults
} from 'react-instantsearch-dom'

interface ResultsProps {
  renderEmptyQuery: ReactElement;
  minAmountofCharacters: number;
}

export const Results: React.FC<ResultsProps> = ({ children, renderEmptyQuery, minAmountofCharacters }) => {
  const ResultConnector = connectStateResults(({ searchState, children }) => (searchState?.query && searchState.query.length >= minAmountofCharacters ? <>{children}</> : renderEmptyQuery))

  return (
    <ResultConnector>
      {children}
    </ResultConnector>
  )
}
