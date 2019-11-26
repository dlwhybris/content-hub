import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCollection from "../components/PostCollection"
import Hero from "../components/Hero"
import MembershipAction from "../components/MembershipAction"
// import Auth from "../utils/auth.js"

// const auth = new Auth()
// auth.login()

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulBlogPost.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Homepage" />
        <Hero />

        <main className="py-4 mx-auto max-w-md lg:max-w-4xl xl:max-w-6xl">
          <div className="my-6">
            <PostCollection posts={posts} />
          </div>
          <div className="my-12 flex justify-center">
            <button className="bg-red-500 text-white uppercase font-bold text-2xl px-8 py-3">
              Discover more
            </button>
          </div>
          <div className="my-6 flex flex-col justify-center">
            <MembershipAction />
            <button className="bg-red-500 text-white uppercase font-bold text-2xl px-8 py-3">
              Sign in
            </button>
          </div>
        </main>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query Homepage {
    allContentfulBlogPost {
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
    site(siteMetadata: {}) {
      siteMetadata {
        title
      }
    }
  }
`
