import React from "react"
import Layout from "../components/Layout"

import Search from "../components/Search"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const SearchPage = ({ location }) => {
  const { siteUrl } = useSiteMetadata()

  return (
    <Layout location={siteUrl} title={location.state.refineString}>
      <main className="py-4 mx-auto max-w-md lg:max-w-4xl xl:max-w-6xl">
        <div className="my-6"></div>

        <div className="my-20 flex flex-col justify-center">
          You searched for {location.state.refineString}
          <Search refineString={location.state.refineString} />
        </div>
      </main>
    </Layout>
  )
}

export default SearchPage
