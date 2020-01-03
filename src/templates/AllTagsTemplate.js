import React from "react"

const AllTagsTemplate = ({ pageContext }) => {
  const tags = pageContext.tags
  return (
    <div>
      {tags.map(tag => {
        return (
          <div key={tag} className="">
            {tag}
          </div>
        )
      })}
    </div>
  )
}

export default AllTagsTemplate
