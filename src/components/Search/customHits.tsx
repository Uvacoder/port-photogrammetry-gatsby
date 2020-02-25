import React from "react"
import styles from "./index.module.css"
import { connectHits } from 'react-instantsearch-dom';
import BlogCard from "../BlogCard";
import { CustomHighlight } from "./customHighlight";
import { CustomSnippet } from "./customSnippet";
import CardContainer from "../CardContainer";

export const CustomHits = connectHits(({ hits }) => (
  <CardContainer>
    {hits.map(hit => (
      <BlogCard
        title={
          <CustomHighlight attribute="title" hit={hit} />
        }
        //@ts-ignore
        slug={hit.slug}
        excerpt={
          <CustomSnippet attribute="excerpt" hit={hit} />
        }
        date={hit.date}
        //@ts-ignore
        categories={hit.categories}
      >
      </BlogCard>
    ))}
  </CardContainer>
));
