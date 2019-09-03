import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tags from "../components/tags";
import Author from "../components/author";


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    console.log(post.frontmatter.cover.childImageSharp.fluid.src)
    const imageStyle = {
      backgroundImage: 'url(' + post.frontmatter.cover.childImageSharp.fluid.src + ')',
    };

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className="w-full m-0 p-0 bg-auto md:bg-cover bg-center h-120" style={imageStyle}>
        </div>

        <main
          className="mx-auto max-w-md xl:max-w-6xl  lg:max-w-4xl md:max-w-2xl sm:max-w-xl -mt-32 mb-12 rounded-lg bg-white mb-8 shadow-xl static">
          <section className=" mx-6 md:mx-20 text-gray-900 font-thin text-xl tracking-wider leading-relaxed pb-12">
            <div className="min-w-full flex flex-col md:flex-row md:items-center md:justify-between py-8">
              <section className="flex flex-col w-full lg:w-3/4">
                <span className="text-sm text-gray-800">{post.frontmatter.date}</span>
                <h1 className="text-5xl text-gray-700 font-medium">{post.frontmatter.title}</h1>
              </section>
              <section className="w-full lg:w-1/4">
                <div className="flex flex-row lg:flex-col lg:justify-between my-4 lg:my-0 text-gray-700 w-3/4 lg:float-right">
                  <Tags tags={post.frontmatter.tags} />
                </div>
              </section>
            </div>
            <div className="py-8 border-b border-gray-400"  dangerouslySetInnerHTML={{ __html: post.html }} />
            <section>
              <Author author={post.frontmatter.author} />
            </section>
            <ul className="mt-8 font-semibold text-sm">
              <li className="float-left">
                {previous && (
                  <Link to={`blog${previous.fields.slug}`} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li className="float-right">
                {next && (
                  <Link to={`blog${next.fields.slug}`} rel="next">
                    {next.frontmatter.title} →
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
    markdownRemark(fields: {slug: {eq: $slug } }) {
          id
      excerpt(pruneLength: 160)
          html
      frontmatter {
          title
          tags
          date(formatString: "MMMM DD, YYYY")
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
            childImageSharp {
              fluid (quality: 100) {
                  ...GatsbyImageSharpFluid
              }
          }
    }
    }
  }
}
`
