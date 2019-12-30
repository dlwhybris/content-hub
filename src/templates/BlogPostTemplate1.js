import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Tags from "../components/Tags"
import Author from "../components/Author"
import MembershipAction from "../components/MembershipAction"
import RenderOptions from "./RenderOptions"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"
import { useAuth } from "react-use-auth"

const BlogPostTemplate1 = ({ data }) => {
  const post = data.contentfulBlogPost
  const premiumContent = post.loginRequired
  const { isAuthenticated } = useAuth()

  let article
  if (premiumContent && !isAuthenticated()) {
    article = <MembershipAction />
  } else {
    article = documentToReactComponents(post.content.json, RenderOptions)
  }

  return (
    <Layout title={post.title}>
      <SEO title={post.title} description={post.description || post.excerpt} />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-xs xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-16">
            <div className="my-6 text-gray-700 tracking-wide font-semibold text-sm">
              {post.publicationDate}
              <Tags tags={post.tags} />
            </div>
            <h1 className="my-6 text-gray-900 tracking-wide text-3xl font-semibold">
              {post.title}
            </h1>
            <p
              className="my-6 text-gray-700 tracking-wide text-lg"
              dangerouslySetInnerHTML={{
                __html: post.shortDescription.childMarkdownRemark.html,
              }}
            ></p>
          </div>
          <div className="md:w-1/2">
            <Img
              fluid={post.cover.fluid}
              className="h-120 object-cover w-full "
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-xs xl:max-w-4xl lg:max-w-2xl md:max-w-lg sm:max-w-md">
          <article className="py-8 md:px-12 text-gray-800 tracking-wide leading-relaxed text-lg">
            {article}
          </article>
          <div className="pt-2 md:px-8 border-t-2 border-gray-500">
            <Author authors={post.authors} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogPostTemplate1

export const pageQuery = graphql`
  query BlogPostBySlug1($slug: String!) {
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
      shortDescription {
        childMarkdownRemark {
          excerpt
          html
        }
      }
      title
      authors {
        id
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
        firstName
        lastName
        jobTitle
      }
      publicationDate(formatString: "MMMM Do, YYYY")
    }
  }
`
