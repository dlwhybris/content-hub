import React from "react"
import { Link } from "gatsby"
import Tags from "./tags"
import Author from "./author"

class Card extends React.Component {
  render() {
    const post = this.props.post
    const imageStyle = {
      backgroundImage: "url(" + post.cover.fluid.src + ")",
    }
    return (
      <div className="rounded shadow-lg bg-white border h-full w-full">
        <div
          className="bg-white h-88 w-full bg-cover rounded-sm"
          style={imageStyle}
        >
          {/* <div className="bg-red-500 h-12 w-12 float-right"></div> */}
          {post.loginRequired ? (
            <div className="triangle-topright float-right"></div>
          ) : (
            ""
          )}
        </div>

        <div className="flex flex-col p-6">
          <div className="flex flex-col justify-between border-2 border-white mb-2">
            <div className="flex justify-between flex-col">
              <div>
                <Tags tags={post.tags} />
                <span className="text-gray-600 text-xs font-semibold tracking-wide">
                  {post.publicationDate}
                </span>
                {post.authors && post.authors[0] ? (
                  <span className="text-gray-600 text-xs font-semibold tracking-wide">
                    &nbsp;By&nbsp;
                    {post.authors && post.authors[0].firstName}
                    &nbsp;
                    {post.authors && post.authors[0].lastName}
                  </span>
                ) : (
                  <></>
                )}

                <Link to={`blog/${post.slug}`}>
                  <h3 className="text-gray-900 font-semibold text-lg leading-tight mt-1 h-full">
                    {post.title}
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
