import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tags from "../components/tags"
import TestComponent from "../components/TestComponent.js"
import Author from "../components/author"
import { login, isAuthenticated } from "../utils/auth"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"

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

    const Bold = ({ children }) => (
      <span className="font-bold ">{children}</span>
    )

    const options = {
      renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (post, children) => (
          <p className="mt-4 ">{children}</p>
        ),
        [BLOCKS.HEADING_1]: (post, children) => (
          <h1 className="font-medium text-3xl mt-4 py-2 text-red-500">
            {children}
          </h1>
        ),
        [BLOCKS.HEADING_2]: (post, children) => (
          <h2 className="font-medium text-3xl mt-4 py-2 text-red-500">
            {children}
          </h2>
        ),
        [BLOCKS.HEADING_3]: (post, children) => (
          <h3 className="font-medium text-2xl mt-4 py-2 text-red-500">
            {children}
          </h3>
        ),
        [BLOCKS.UL_LIST]: (post, children) => (
          <ul className="list-disc pl-4"> {children}</ul>
        ),
        [BLOCKS.OL_LIST]: (post, children) => (
          <ol className="list-decimal text-red-500 pl-4"> {children}</ol>
        ),
        [BLOCKS.LIST_ITEM]: (post, children) => (
          <li className="text-gray-900"> {children}</li>
        ),
        [BLOCKS.QUOTE]: (post, children) => (
          <blockquote className="italic font-light border-l-2 border-gray-500 pl-2">
            {children}
          </blockquote>
        ),
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
        <TestComponent />
        <section className="bg-white">
          <div className="py-16 mx-auto max-w-xs xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl border-b-2 border-gray-500 flex">
            <div className="w-1/3 relative">
              <div className="my-16 text-gray-700 tracking-wide font-semibold text-sm -mr-64 bg-gray-300">
                {post.publicationDate}
                <h1 className="mt-6 mb-2 text-gray-900 tracking-wide text-3xl font-semibold">
                  {post.title}
                </h1>
                <Tags tags={post.tags} />
              </div>

              <div className="pt-2 mr-12 border-t-2 border-gray-500">
                <Author authors={post.authors} />
              </div>
            </div>
            <div className="w-2/3 relative">
              {/*               <Img
                fluid={post.cover.fluid}
                className="h-120 object-cover w-full "
              /> */}
              <img
                src="https://source.unsplash.com/random"
                className="h-120 object-cover w-full absolute"
                alt=""
              />
              <div className="mx-auto max-w-xs xl:max-w-4xl lg:max-w-2xl md:max-w-lg sm:max-w-md">
                <article className="py-8 px-12 text-gray-800 tracking-wide leading-relaxed text-lg">
                  {postContent}
                </article>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug3($slug: String!) {
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
