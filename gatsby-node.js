const path = require(`path`)
const { slugify } = require(`./src/utils/slugify`)

function getTemplate(templates) {
  const randomTemplate = templates[Math.floor(Math.random() * templates.length)]
  return randomTemplate
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate1 = path.resolve(`./src/templates/BlogPostTemplate1.js`)
  const blogPostTemplate2 = path.resolve(`./src/templates/BlogPostTemplate2.js`)
  //const allTagsTemplate = path.resolve(`./src/templates/AllTagsTemplate.js`)
  const tagTemplate = path.resolve(`./src/templates/TagTemplate.js`)
  const templates = Array.from([blogPostTemplate1, blogPostTemplate2])
  return graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              title
              slug
              tags
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // distinct set of tag values
    const tags = new Set()

    // Create blog posts pages.
    const posts = result.data.allContentfulBlogPost.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      if (post.node && post.node.tags && post.node.tags.length > 1) {
        post.node.tags.forEach(tags.add, tags)
      }

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
    // list page with all tags
    /*     createPage({
      path: `tags`,
      component: allTagsTemplate,
      context: {
        tags: tags,
      },
    }) */

    tags.forEach(tag => {
      createPage({
        path: `tags/${slugify(tag)}`,
        component: tagTemplate,
        context: {
          tag: tag,
        },
      })
    })
    return null
  })
}
