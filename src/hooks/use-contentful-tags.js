import { useStaticQuery, graphql } from "gatsby"

export const useContentfulTags = () => {
  const { allContentfulBlogPost } = useStaticQuery(
    graphql`
      query allContentfulTags {
        allContentfulBlogPost {
          edges {
            node {
              tags
            }
          }
        }
      }
    `
  )
  const tags = new Set()
  const posts = allContentfulBlogPost.edges

  posts.forEach(post => {
    if (post.node && post.node.tags && post.node.tags.length > 1) {
      post.node.tags.forEach(tags.add, tags)
    }
  })
  return tags
}
