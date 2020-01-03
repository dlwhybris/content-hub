import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Tags from "../components/Tags"
import Author from "../components/Author"
import RenderOptions from "./RenderOptions"
import MembershipAction from "../components/MembershipAction"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"
import { useAuth } from "react-use-auth"

const BlogPostTemplate2 = ({ data }) => {
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

      <section className="bg-white">
        <div className="py-16 mx-auto max-w-xs xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl border-b-2 border-gray-500 flex flex-col flex-col md:flex-row">
          <section className="md:w-1/3 md:z-10">
            <div className="bg-white md:mt-24  md:z-20 md:-mr-32 text-gray-700 tracking-wide font-semibold text-sm pr-8">
              <div className="pt-2 mr-12  md:w-2/3">{post.publicationDate}</div>

              <div className="py-12">
                <h1 className="mb-1 text-gray-900 tracking-wide text-4xl font-semibold">
                  {post.title}
                </h1>
                <Tags tags={post.tags} />
              </div>
            </div>
            <div className="md:pt-2 md:mr-12 border-t-2 border-gray-500">
              <Author authors={post.authors} />
            </div>
          </section>
          <div className="md:w-2/3">
            <Img fluid={post.cover.fluid} />
            <div className="py-8 md:px-12 text-gray-800">
              <div className="border-2 border-red-200 p-4 mt-6">
                <p
                  className="md:px-12 text-gray-800 tracking-wide leading-relaxed italic text-sm"
                  dangerouslySetInnerHTML={{
                    __html: post.shortDescription.childMarkdownRemark.html,
                  }}
                ></p>
              </div>
            </div>

            <article className="pb-8 pt-0 md:px-12 text-gray-800 tracking-wide leading-relaxed text-lg">
              {article}
            </article>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogPostTemplate2

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
