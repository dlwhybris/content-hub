import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCollection from "../components/PostCollection"
// import Auth from "../utils/auth.js"

// const auth = new Auth()
// auth.login()

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulBlogPost.edges
    //const firstPost = posts[0].node

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Homepage" />
        <main className="py-4 mx-auto max-w-md xl:max-w-6xl  lg:max-w-4xl md:max-w-2xl sm:max-w-xl">
          <div className="my-6">{/* <Card post={firstPost} /> */}</div>
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
              fluid(maxWidth: 700) {
                ...GatsbyContentfulFluid
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
            fluid(maxWidth: 700) {
              ...GatsbyContentfulFluid
            }
          }
          loginRequired
          publicationDate
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
