import React, { Component } from "react"
import Card from "./card"

export default class PostCollection extends Component {
  render() {
    const posts = this.props.posts
    return (
      <div className="flex flex-wrap lg:flex-no-wrap justify-start">
        {posts.map(({ node }, idx) => {
          return (
            <div key={node.slug} className="lg:w-1/2 m-2">
              <Card post={node} />
            </div>
          )
        })}
      </div>
    )
  }
}
