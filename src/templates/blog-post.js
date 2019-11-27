import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tags from "../components/tags"
import Author from "../components/author"
import { login, isAuthenticated } from "../utils/auth"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulBlogPost
    const premiumContent = post.loginRequired

    if (!isAuthenticated() && premiumContent) {
      login()
      return <p>Redirecting to login...</p>
    }
    const siteTitle = post.title
    const { previous, next } = this.props.pageContext
    const imageStyle = {
      backgroundImage: "url(" + post.cover.fluid.src + ")",
    }

    const Bold = ({ children }) => (
      <span className="font-normal ">{children}</span>
    )
    const Text = ({ children }) => (
      <p className="leading-relaxed tracking-wider">{children}</p>
    )

    const options = {
      renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (post, children) => (
          <p className="mt-4 p-2 ">{children}</p>
        ),
        [BLOCKS.HEADING_1]: (post, children) => (
          <h1 className="font-medium text-4xl mt-4 py-2">{children}</h1>
        ),
        [BLOCKS.HEADING_2]: (post, children) => (
          <h2 className="font-medium text-3xl mt-4 py-2">{children}</h2>
        ),
        [BLOCKS.HEADING_3]: (post, children) => (
          <h3 className="font-medium text-2xl mt-4 py-2">{children}</h3>
        ),
        [BLOCKS.HEADING_4]: (post, children) => (
          <h4 className="font-medium text-xl mt-4 py-2">{children}</h4>
        ),
        [BLOCKS.QUOTE]: (post, children) => <q className="my-12">{children}</q>,
        [INLINES.HYPERLINK]: (post, children) => (
          <a className="text-red-500 font-semibold cursor-pointer border-b border-red-500">
            {children}
          </a>
        ),
      },
    }
    const postContent = documentToReactComponents(post.content.json, options)

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
            <div className="py-8 border-b border-gray-400">{postContent} </div>
            <section>
              <Author authors={post.authors} />
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
    contentfulBlogPost(slug: { eq: $slug }) {
      cover {
        fluid(maxWidth: 1200) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      content {
        json
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
          childMarkdownRemark {
            excerpt
            html
          }
        }
        firstName
        lastName
        jobTitle
      }
      publicationDate(formatString: "MMMM Do, YYYY")
    }
  }
`
