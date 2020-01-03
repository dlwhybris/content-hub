import { useStaticQuery, graphql } from "gatsby"

export const useContentfulBlogs = () => {
  const { allContentfulBlogPost } = useStaticQuery(
    graphql`
      query blogs {
        allContentfulBlogPost {
          edges {
            node {
              authors {
                firstName
                lastName
                avatar {
                  fluid(maxWidth: 100) {
                    ...GatsbyContentfulFluid_withWebp
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
                fluid(maxWidth: 1200) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
              loginRequired
              publicationDate(formatString: "MMMM Do, YYYY")
              shortDescription {
                childMarkdownRemark {
                  excerpt
                }
              }
            }
          }
        }
      }
    `
  )
  return allContentfulBlogPost.edges
}
