import React from "react"
import Img from "gatsby-image"
import Tags from "./tags"

const CardAuthor = ({ author, publicationDate, tags }) => {
  return (
    <div className="flex">
      <div className="mx-auto md:m-0">
        <Img sizes={author.avatar.fluid} className="rounded-full w-12 h-12" />
      </div>
      <div className="mx-2">
        <div>
          <Tags tags={tags} />
        </div>
        <div className="text-gray-600 text-xs font-semibold tracking-wide">
          by&nbsp;
          {author.firstName}
          &nbsp;
          {author.lastName}
          &nbsp;-&nbsp;
          {publicationDate}
        </div>
      </div>
    </div>
  )
}

export default CardAuthor
