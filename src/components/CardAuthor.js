import React from "react"
import Img from "gatsby-image"
import Tags from "./Tags"

const CardAuthor = ({ author, publicationDate, tags }) => {
  return (
    <div className="flex">
      <div>
        <Img sizes={author.avatar.fluid} className="rounded-full w-12 h-12" />
      </div>
      <div className="mx-2">
        <div>
          <Tags tags={tags} />
        </div>
        <div className="text-gray-700 text-xs font-medium tracking-wide">
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
