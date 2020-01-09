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
    {/* Always use a ternary when coercing an array length */}
    {/* otherwise you might print out "0" to your UI */}
    {hits.length ? (
      <>
        {/* I wanted to give a little explanation of the search here */}
        <div>
          These are the results of your search. The title and excerpt are
          displayed, though your search may have been found in the content of
          the post as well.
        </div>

        {/* Here is the crux of the component */}
        {hits.map(hit => {
          return (
            <div key={hit.objectID}>
              <Link to={hit.slug}>
                <h4>
                  <Highlight attribute="title" hit={hit} tagName="strong" />
                </h4>
                {hit.subtitle ? (
                  <h5>
                    <Highlight
                      attribute="subtitle"
                      hit={hit}
                      tagName="strong"
                    />
                  </h5>
                ) : null}
              </Link>
              <div>
                <Highlight attribute="excerpt" hit={hit} tagName="strong" />
              </div>
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
