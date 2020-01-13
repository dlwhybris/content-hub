import React from "react"
import Layout from "../components/Layout"

import Search from "../components/Search"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const SearchPage = ({ location }) => {
  const { siteUrl } = useSiteMetadata()

  return (
    <Layout
      location={siteUrl}
      title={location.state ? location.state.searchString : "Search"}
    >
      <main className="py-12 mx-auto max-w-md lg:max-w-4xl xl:max-w-6xl min-h-screen">
        <div className="p-20 bg-white  shadow-lg  rounded-lgflex flex-col justify-center">
          <Search
            refineString={location.state ? location.state.searchString : ""}
          />
        </div>
      </main>
    </Layout>
  )
}

export default SearchPage
