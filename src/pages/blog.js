import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <main className="py-8 mx-auto max-w-xs xl:max-w-6xl  lg:max-w-4xl md:max-w-2xl sm:max-w-xl">
          <h1 className="text-5xl my-8 font-semibold text-indigo-500 tracking-wider text-center">All posts</h1>
          <div class="flex flex-col">
            <div>
              {posts.map(({ node }) => {
                return (
                  <div key={node.fields.slug} className="mb-8">
                    <Card post={node} />
                  </div>
                )
              })}
            </div>
          </div>
          <div class="flex content-center">
            <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mx-auto">
              Read more
            </button>
          </div>

        </main>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD")
            title
            description
            tags
            author {
              name
              bio
              avatar {
                  childImageSharp {
                    fluid (quality: 100) {
                      ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            cover {
                childImageSharp{
                    sizes(maxWidth: 2000) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
          }
        }
      }
    }
  }
`
