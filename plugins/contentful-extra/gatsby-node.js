module.exports = {
  setFieldsOnGraphQLNodeType: async function(data) {
    const node = data.type
    const isContentfulNode = node.name
      .toLowerCase()
      .startsWith("contentfulherocomponent")

    if (!isContentfulNode) {
      return
    } else {
      //console.log("object", node)
      return /* {
        textOnCover: {
          type: "",
          args: {
            childMarkdownRemark: {
              type: "",
            },
          },
          resolve: (source, fieldArgs) => {
            return `Id of this node is ${source.id}.
                  Field was called with argument: ${fieldArgs.textOnCover}`
          },
        },
      } */
    }
  },
}
