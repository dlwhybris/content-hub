import React from "react"
import { Link } from "gatsby"
import CardAuthor from "./CardAuthor"
import Img from "gatsby-image"

const Card = ({ post }) => {
  return (
    <div className="rounded shadow-lg bg-white border h-full w-full">
      <div className="bg-white h-88 w-full bg-cover rounded-sm">
        <Img
          fluid={post.cover.fluid}
          className="bg-white h-88 w-full bg-cover rounded-sm"
        />
        {post.loginRequired ? (
          <div className="h-16 w-16 float-right text-white triangle-topright relative -mt-88">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="fill-current w-4 h-4 float-right -mt-12 m-2"
            >
              <path
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                fillRule="evenodd"
              />
            </svg>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="flex flex-col p-6">
        <div className="flex flex-col justify-between border-2 border-white mb-2">
          <div className="flex justify-between flex-col">
            <div>
              <div className="mb-6">
                {post.authors && post.authors[0] ? (
                  <CardAuthor
                    author={post.authors[0]}
                    publicationDate={post.publicationDate}
                    tags={post.tags}
                  />
                ) : (
                  <></>
                )}
              </div>

              <Link to={`blog/${post.slug}`}>
                <h3 className="text-gray-700 font-semibold text-2xl leading-tight mt-1 h-full">
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

export default Card
