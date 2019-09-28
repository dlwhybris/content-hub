import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Tags from "./tags"
import Author from "./author"

class Card extends React.Component {
  render() {
    const post = this.props.post
    const imgageWrapperStyle = {
      position: "absolute",
    }
    return (
      <div className="rounded shadow-lg overflow-hidden bg-white border h-full w-full">
        <Link to={`blog/${post.slug}`}>
          <div className="pb-3/4 lg:pb-1/2 relative">
            {/* Img works with a wrapper, default value is position:relative, overwritten this, object-cover is by default applied on the underlying image tag */}
            <Img
              sizes={post.cover.fluid}
              className="h-full w-full"
              style={imgageWrapperStyle}
            />
          </div>
        </Link>

        <div className="p-6 h-full">
          <span className="text-gray-600 text-xs uppercase font-semibold tracking-wide">
            {post.publicationDate}
          </span>
          <Link to={`blog/${post.slug}`}>
            <h3 className="text-indigo-800 font-semibold text-lg leading-tight mt-1">
              {post.title}
            </h3>
          </Link>
          <div className="flex flex-col justify-start">
            <p
              className="text-gray-600 text-base text-xs mt-4  h-auto md:h-32 xl:h-24"
              dangerouslySetInnerHTML={{
                __html:
                  post.shortDescription.childMarkdownRemark.excerpt ||
                  post.content.content,
              }}
            />
            <div className="flex flex-col justify-between">
              <div>
                <Author authors={post.authors} />
              </div>
              <div>
                {" "}
                <Tags tags={post.tags} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card