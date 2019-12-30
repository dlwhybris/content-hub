const path = require(`path`)

function getTemplate(templates) {
  const randomTemplate = templates[Math.floor(Math.random() * templates.length)]
  return randomTemplate
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate1 = path.resolve(`./src/templates/BlogPostTemplate1.js`)
  const blogPostTemplate2 = path.resolve(`./src/templates/BlogPostTemplate2.js`)
  const templates = Array.from([blogPostTemplate1, blogPostTemplate2])
  return graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allContentfulBlogPost.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `blog/${post.node.slug}`,
        component: getTemplate(templates),
        context: {
          slug: post.node.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}
