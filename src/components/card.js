import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Tags from "./tags"
import Author from "./author"

class Card extends React.Component {
  render() {
    const post = this.props.post
    const imageStyle = {
      backgroundImage: "url(" + post.cover.fluid.src + ")",
    }
    return (
      <div className="rounded shadow-lg bg-white border h-full w-full flex-col">
        <div
          className="bg-red-400 h-56 w-full bg-cover rounded-sm"
          style={imageStyle}
        ></div>
        <div className="flex flex-col p-6">
          <div className="flex flex-col justify-between border-2 border-white mb-2">
            <div className="flex justify-between flex-col h-1/3 ">
              <div>
                <span className="text-gray-600 text-xs uppercase font-semibold tracking-wide">
                  {post.publicationDate}
                </span>
                <Link to={`blog/${post.slug}`}>
                  <h3 className="text-indigo-800 font-semibold text-lg leading-tight mt-1 h-full">
                    {post.title}
                  </h3>
                </Link>
              </div>
              <div className="mt-4 h-2/3">
                <p
                  className="text-gray-700 text-base text-xs"
                  dangerouslySetInnerHTML={{
                    __html:
                      post.shortDescription.childMarkdownRemark.excerpt ||
                      post.content.content,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="">
              <Author authors={post.authors} />
            </div>
            <div className="">
              <Tags tags={post.tags} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
