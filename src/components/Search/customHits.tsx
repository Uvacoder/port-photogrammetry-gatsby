import React from "react"
import { connectHits } from 'react-instantsearch-dom';
import BlogCard from "../BlogCard";
import { CustomHighlight } from "./customHighlight";
import { CustomSnippet } from "./customSnippet";
import { toImageWithMeta } from "../ImageWithMeta";

export const CustomHits = connectHits(({ hits }) => (
  <>
    {hits.map(hit => (
      <BlogCard
        key={hit.objectID}
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
        featuredImage={toImageWithMeta(hit.featuredImage)}
      >
      </BlogCard>
    ))}
  </>
));
