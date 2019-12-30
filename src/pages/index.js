import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostCollection from "../components/PostCollection"
import Hero from "../components/Hero"
//import MembershipAction from "../components/MembershipAction"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { useContentfulBlogs } from "../hooks/use-contentful-blogs"

const IndexPage = ({ data }) => {
  const { siteUrl } = useSiteMetadata()
  const { contentfulTitle, blocks } = data.contentfulPage
  const posts = useContentfulBlogs()
  const heros = blocks.filter(block => {
    return block.__typename === "ContentfulHeroComponent"
  })
  return (
    <Layout location={siteUrl} title={contentfulTitle}>
      <SEO title="Homepage" />
      <Hero hero={heros[0]} />

      <main className="py-4 mx-auto max-w-md lg:max-w-4xl xl:max-w-6xl">
        <div className="my-6">
          <PostCollection posts={posts} />
        </div>

        {(() => {
          //replace hardcoded value with configurable value
          if (posts.length > 4) {
            return (
              <div className="my-12 flex justify-center">
                <button className="bg-red-500 text-white uppercase font-bold text-2xl px-8 py-3">
                  Discover more
                </button>
              </div>
            )
          }
        })()}
        {/*         <div className="my-20 flex flex-col justify-center">
          <MembershipAction />
        </div> */}
      </main>
    </Layout>
  )
}

export const homepageQuery = graphql`
  {
    contentfulPage(title: { eq: "Homepage" }) {
      blocks {
        ... on ContentfulHeroComponent {
          coverImage {
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
        ... on ContentfulRecentArticles {
          numberOfArticles
        }
      }
      title
    }
  }
`

export default IndexPage
