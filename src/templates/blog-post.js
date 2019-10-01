import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tags from "../components/tags"
import Author from "../components/author"
import { login, isAuthenticated } from "../utils/auth"

class BlogPostTemplate extends React.Component {
  render() {
    if (!isAuthenticated()) {
      login()
      return <p>Redirecting to login...</p>
    }
    const post = this.props.data.contentfulBlogPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const imageStyle = {
      backgroundImage: "url(" + post.cover.fluid.src + ")",
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.title}
          description={post.description || post.excerpt}
        />
        <div
          className="w-full m-0 p-0 bg-auto md:bg-cover bg-center h-120"
          style={imageStyle}
        ></div>

        <main className="mx-auto max-w-md xl:max-w-6xl  lg:max-w-4xl md:max-w-2xl sm:max-w-xl -mt-32 mb-12 rounded-lg bg-white mb-8 shadow-xl static">
          <section className=" mx-6 md:mx-20 text-gray-900 font-thin text-xl tracking-wider leading-relaxed pb-12">
            <div className="min-w-full flex flex-col md:flex-row md:items-center md:justify-between py-8">
              <section className="flex flex-col w-full lg:w-3/4">
                <span className="text-sm text-gray-800">{post.date}</span>
                <h1 className="text-5xl text-gray-700 font-medium">
                  {post.title}
                </h1>
              </section>
              <section className="w-full lg:w-1/4">
                <div className="flex flex-row lg:flex-col lg:justify-between my-4 lg:my-0 text-gray-700 w-3/4 lg:float-right">
                  <Tags tags={post.tags} />
                </div>
              </section>
            </div>
            <div
              className="py-8 border-b border-gray-400"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <section>
              <Author author={post.authors[0]} />
            </section>
            <ul className="mt-8 font-semibold text-sm">
              <li className="float-left">
                {previous && (
                  <Link to={`blog/${previous.slug}`} rel="prev">
                    ← {previous.title}
                  </Link>
                )}
              </li>
              <li className="float-right">
                {next && (
                  <Link to={`blog/${next.slug}`} rel="next">
                    {next.title} →
                  </Link>
                )}
              </li>
            </ul>
          </section>
        </main>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      cover {
        fluid(maxWidth: 700) {
          ...GatsbyContentfulFluid
        }
      }
      content {
        content
      }
      loginRequired
      slug
      tags
      title
      authors {
        id
        avatar {
          fluid {
            src
          }
        }
        bio {
          bio
        }
        firstName
        lastName
        jobTitle
      }
      publicationDate(formatString: "MMMM Do, YYYY")
    }
  }
`
