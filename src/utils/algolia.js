const postQuery = `{
  posts: allContentfulBlogPost {
          edges {
            node {
              title
              slug
              tags
              authors
                {
                    firstName
                    lastName
                }
            shortDescription {
                    childMarkdownRemark {
                        excerpt
                    }
                }
            }
        }
    }
}`

const flatten = arr =>
  arr.map(({ node: { ...rest } }) => ({
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    settings,
  },
]

module.exports = queries
