import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const AllTagsTemplate = ({ pageContext }) => {
  const tags = pageContext.tags
  return (
    <Layout title="All tags">
      <main className="py-4 mx-auto max-w-md lg:max-w-4xl xl:max-w-6xl">
        <div>
          {tags.map(tag => {
            return (
              <div key={tag} className="">
                <Link to={`tags/${tag}`}>{tag}</Link>
              </div>
            )
          })}
        </div>
      </main>
    </Layout>
  )
}

export default AllTagsTemplate
