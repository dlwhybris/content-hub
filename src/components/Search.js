import React from "react"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  SearchBox,
  connectHits,
  Highlight,
} from "react-instantsearch-dom"
import { Link } from "gatsby"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)
console.log("indexName", process.env.GATSBY_ALGOLIA_INDEX_NAME)

const Hits = connectHits(({ hits }) => (
  <div>
    {hits.length ? (
      <>
        {hits.map(hit => {
          console.log("hit", hit)
          return (
            <div key={hit.objectID}>
              <Link to={`/blog/` + hit.slug}>
                <h4>
                  <Highlight attribute="title" hit={hit} tagName="strong" />
                </h4>
                {hit.tags ? (
                  <h5 className="text-xs">
                    <Highlight attribute="tags" hit={hit} tagName="strong" />
                  </h5>
                ) : null}
                {hit.authors ? (
                  <h5 className="text-xs">
                    <Highlight
                      attribute="authors[0].firstName"
                      hit={hit}
                      tagName="strong"
                    />
                    <Highlight
                      attribute="authors[0].lastName"
                      hit={hit}
                      tagName="strong"
                    />
                  </h5>
                ) : null}
              </Link>
            </div>
          )
        })}
      </>
    ) : (
      <p>There were no results for your query. Please try again.</p>
    )}
  </div>
))

const Search = () => {
  return (
    <InstantSearch
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
      searchClient={searchClient}
    >
      <SearchBox />
      <Hits />
    </InstantSearch>
  )
}

export default Search
