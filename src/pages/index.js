import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCollection from "../components/PostCollection"
import Hero from "../components/Hero"
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
          <div className="my-6"></div>
          <PostCollection posts={posts} />
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
