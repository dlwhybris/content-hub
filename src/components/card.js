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
        <div className="h-full flex flex-col p-6">
          <div className="flex flex-col justify-between h-1/2">
            <section>
              <span className="text-gray-600 text-xs uppercase font-semibold tracking-wide">
                {post.publicationDate}
              </span>
              <Link to={`blog/${post.slug}`}>
                <h3 className="text-indigo-800 font-semibold text-lg leading-tight mt-1 h-full">
                  {post.title}
                </h3>
              </Link>
            </section>
            <div>
              <p
                className="text-gray-700 text-base text-xs mt-4 h-1/2"
                dangerouslySetInnerHTML={{
                  __html:
                    post.shortDescription.childMarkdownRemark.excerpt ||
                    post.content.content,
                }}
              />
            </div>
          </div>
          <div className="flex flex-col justify-between mt-4">
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
