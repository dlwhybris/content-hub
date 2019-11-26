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
          <h1 className="font-medium text-6xl text-red-500 mt-4 py-2">
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
        [BLOCKS.HEADING_4]: (post, children) => (
          <h4 className="font-medium text-xl mt-4 py-2 font-bold text-gray-800">
            {children}
          </h4>
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
        <section className="bg-white py-16">
          <div className="mx-auto max-w-xs xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl flex">
            <div className="w-1/2 pr-16">
              <div className="my-6 text-gray-700 tracking-wide font-semibold text-sm">
                {post.publicationDate}
                <Tags tags={post.tags} />
              </div>
              <h1 className="my-6 text-gray-900 tracking-wide text-3xl font-semibold">
                {post.title}
              </h1>
              <p className="my-6 text-gray-700 tracking-wide text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Euismod lacinia at quis risus sed vulputate odio ut. Quis lectus
                nulla at volutpat diam. Ornare arcu dui vivamus arcu felis
                bibendum ut tristique. Elit eget gravida cum sociis natoque
                penatibus et.
              </p>
            </div>
            <div className="w-1/2">
              <img
                src="https://source.unsplash.com/random"
                alt=""
                className="h-120 object-cover w-full "
              />
            </div>
          </div>
        </section>
        <section className="bg-gray-100">
          <div className="mx-auto max-w-xs xl:max-w-4xl lg:max-w-2xl md:max-w-lg sm:max-w-md">
            <article className="py-8 px-8 text-gray-900 tracking-wide leading-relaxed">
              {postContent}
            </article>
            <div className="pt-2  px-8 border-t-2 border-gray-500">
              <Author authors={post.authors} />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug2($slug: String!) {
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
