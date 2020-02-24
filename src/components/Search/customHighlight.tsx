import React from "react"
import styles from "./index.module.css"
import { connectHighlight } from 'react-instantsearch-dom';

//@ts-ignore
const Highlight = ({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  });

  return (
    <span>
      {parsedHit.map(
        //@ts-ignore
        (part, index) =>
          part.isHighlighted ? (
            <mark key={index}>{part.value}</mark>
          ) : (
              <span key={index}>{part.value}</span>
            )
      )}
    </span>
  );
};

export const CustomHighlight = connectHighlight(Highlight);
