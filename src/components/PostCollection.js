import React, { Component } from "react"
import Card from "./card"

export default class PostCollection extends Component {
  render() {
    const posts = this.props.posts
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
}
