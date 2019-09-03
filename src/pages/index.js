import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card";


class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const firstPost = posts[0].node;



    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Homepage"
        />
        <main className="py-4 mx-auto max-w-md xl:max-w-6xl  lg:max-w-4xl md:max-w-2xl sm:max-w-xl">

          <div className="flex flex-wrap w-full justify-between">
            {posts.map(({ node }, idx) => {
              if (idx === 0)
                return null;
              else
                return (
                  <div key={node.fields.slug} className="py-4 pr-2 md:w-1/2 xl:w-1/3 w-full flex-grow ">
                    <Card post={node} />
                  </div>
                )
            })}
          </div>
          <div className="my-6">
            <Card post={firstPost} />
          </div>
        </main>

      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 4, sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            description
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
