import React from "react"
import PostCollection from "../components/PostCollection"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { graphql } from "gatsby"

const TagTemplate = ({ data }) => {
  const posts = data.allContentfulBlogPost.edges

  return (
    <Layout title="tags">
      <SEO title="Homepage" />
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
      </main>
    </Layout>
  )
}

export default TagTemplate

export const query = graphql`
  query PostsByTag($tag: [String]) {
    allContentfulBlogPost(filter: { tags: { in: $tag } }) {
      edges {
        node {
          authors {
            firstName
            lastName
            avatar {
              fluid(maxWidth: 50) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            bio {
              childMarkdownRemark {
                excerpt
                html
              }
            }
          }
          title
          tags
          slug
          content {
            content
          }
          cover {
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          loginRequired
          publicationDate(formatString: "MMMM Do, YYYY")
          shortDescription {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`
