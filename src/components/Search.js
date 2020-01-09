import React from "react"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  /*   Highlight,
  connectHits, */
  connectSearchBox,
} from "react-instantsearch-dom"
// import { Link } from "gatsby"
import { navigate } from "gatsby"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

const navigateToSeachPage = (event, currentRefinement) => {
  event.preventDefault()
  console.log("currentRefinement", currentRefinement)
  navigate("/search/")
}

const SearchBox = connectSearchBox(({ currentRefinement, refine }) => (
  <form noValidate action="" role="search">
    <label htmlFor="search" className="sr-only">
      Search for articles
    </label>
    <input
      type="search"
      className="bg-white rounded-l-full px-8 py-4 text-gray-700 focus:outline-none border-2 border-white focus:border-2 focus:border-red-300 focus:border-r-0"
      placeholder="I'm interested in"
      value={currentRefinement}
      //onChange={event => refine(event.currentTarget.value)}
      id="search"
    />
    <button
      className="text-white bg-red-500 font-bold rounded-r-full py-4 px-8 uppercase tracking-wide"
      onClick={e => navigateToSeachPage(e, currentRefinement)}
    >
      Search
    </button>
  </form>
))

/* const Hits = connectHits(({ hits }) => (
  <div className="bg-white p-6">
    {hits.length ? (
      <>
        {hits.map(hit => {
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
)) */

const Search = () => {
  return (
    <div className="md:mr-10 mb-6 md:mb-0">
      <InstantSearch
        indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
        searchClient={searchClient}
      >
        <SearchBox />
        {/* <Hits /> */}
      </InstantSearch>
    </div>
  )
}

export default Search
