import React from "react"
import Card from "./Card"

const PostCollection = ({ posts }) => {
  return (
    <div className="flex flex-wrap justify-start">
      {posts.map(({ node }, idx) => {
        return (
          <div key={node.slug} className="xl:w-1/2 p-2 my-4 flex-grow">
            <Card post={node} />
          </div>
        )
      })}
    </div>
  )
}

export default PostCollection
