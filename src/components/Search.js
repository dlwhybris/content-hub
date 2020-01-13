import React, { useState } from "react"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  Highlight,
  connectHits,
  connectSearchBox,
} from "react-instantsearch-dom"
import { Link } from "gatsby"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

const SearchBox = connectSearchBox(({ currentRefinement, refine }) => (
  <div className="w-full mt-4 mb-12">
    <label htmlFor="search" className="sr-only">
      Search for articles
    </label>
    <input
      type="search"
      className="w-full bg-gray-200 shadow-inner rounded-full px-8 py-4 text-gray-700 focus:outline-none border-gray-900 focus:border-2 focus:border-gray-300"
      placeholder="I'm interested in"
      value={currentRefinement}
      onChange={e => refine(e.target.value)}
      id="search"
    />
  </div>
))

const Hits = connectHits(({ hits }) => (
  <div className="py-6">
    {hits.length ? (
      <>
        {hits.map(hit => {
          return (
            <div
              key={hit.objectID}
              className="p-6 border-b-2 border-gray-300 hover:border-gray-200 hover:shadow-lg"
            >
              <Link to={`/blog/` + hit.slug}>
                <div className="lg:flex justify-between py-2">
                  <div className="lg:w-1/2">
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
  return (
    <div>
      <InstantSearch
        indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
        searchClient={searchClient}
      >
        <SearchBox defaultRefinement={refineString || ""} />
        <Hits />
      </InstantSearch>
    </div>
  )
}

export default Search
