import React, { ReactElement } from "react"
import {
  connectStateResults
} from "react-instantsearch-dom"

interface ResultsProps {
  renderEmptyQuery: ReactElement
}

export const Results: React.FC<ResultsProps> = ({ children, renderEmptyQuery }) => {
  const ResultConnector = connectStateResults(({ searchState, children }) =>
    searchState?.query && searchState.query.length >= 2 ? <>{children}</> : renderEmptyQuery
  );

  return <ResultConnector>
    {children}
  </ResultConnector>
}
