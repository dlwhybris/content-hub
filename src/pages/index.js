import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCollection from "../components/PostCollection"
import Hero from "../components/Hero"
import MembershipAction from "../components/MembershipAction"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { useContentfulBlogs } from "../hooks/use-contentful-blogs"

const IndexPage = ({ data }) => {
  const { title, siteUrl } = useSiteMetadata()
  const posts = useContentfulBlogs()

  return (
    <Layout location={siteUrl} title={title}>
      <SEO title="Homepage" />
      <Hero />
      {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}

      <main className="py-4 mx-auto max-w-md lg:max-w-4xl xl:max-w-6xl">
        <div className="my-6">
          <PostCollection posts={posts} />
        </div>
        <div className="my-12 flex justify-center">
          <button className="bg-red-500 text-white uppercase font-bold text-2xl px-8 py-3">
            Discover more
          </button>
        </div>
        <div className="my-20 flex flex-col justify-center">
          <MembershipAction />
          <button className="bg-red-500 text-white uppercase font-bold text-2xl px-8 py-3">
            Sign in
          </button>
        </div>
      </main>
    </Layout>
  )
}

export const homepageQuery = graphql`
  {
    contentfulPage(title: { eq: "Homepage" }) {
      blocks {
        ... on ContentfulHeroComponent {
          id
        }
        ... on ContentfulRecentArticles {
          id
        }
      }
      title
    }
  }
`

export default IndexPage
