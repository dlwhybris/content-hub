import React from "react"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  Highlight,
  connectHits,
  SearchBox,
} from "react-instantsearch-dom"
import { Link } from "gatsby"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

/* const SearchBox = connectSearchBox(({ currentRefinement, refine }) => (
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
)) */

const Hits = connectHits(({ hits }) => (
  <div className="p-6">
    {hits.length ? (
      <>
        {hits.map(hit => {
          return (
            <div
              key={hit.objectID}
              className="p-6 border-b-2 border-gray-300 hover:border-gray-200 hover:shadow-lg"
            >
              <Link to={`/blog/` + hit.slug}>
                <div className="flex justify-between py-2">
                  <div className="w-1/2">
                    <h4 className="text-lg font-semibold">
                      <Highlight attribute="title" hit={hit} tagName="strong" />
                    </h4>

                    <p className="pt-2 pb-6">
                      <Highlight
                        attribute="shortDescription.childMarkdownRemark.excerpt"
                        tagName="strong"
                        hit={hit}
                      />
                    </p>

                    {hit.authors ? (
                      <h5 className="text-xs">
                        <Highlight
                          attribute="authors[0].firstName"
                          hit={hit}
                          tagName="strong"
                        />
                        &nbsp;
                        <Highlight
                          attribute="authors[0].lastName"
                          hit={hit}
                          tagName="strong"
                        />
                      </h5>
                    ) : null}
                  </div>
                  <div>
                    {hit.tags ? (
                      <h5 className="text-sm font-semibold text-red-600 uppercase">
                        <Highlight
                          attribute="tags"
                          hit={hit}
                          tagName="strong"
                        />
                      </h5>
                    ) : null}
                  </div>
                </div>
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

const Search = ({ refineString }) => {
  console.log("refineString", refineString)
  return (
    <div className="md:mr-10 mb-6 md:mb-0">
      <InstantSearch
        indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
        searchClient={searchClient}
      >
        <SearchBox
          searchAsYouType={false}
          defaultRefinement={refineString || ""}
        />
        <Hits />
      </InstantSearch>
    </div>
  )
}

export default Search
