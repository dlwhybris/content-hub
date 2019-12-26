import React from "react"
import Img from "gatsby-image"

const Author = ({ authors }) => {
  if (!authors) {
    return null
  }
  return (
    <section className="flex flex-row py-6 flex-wrap mx-auto items-start">
      <div className="mx-auto md:m-0">
        <Img
          fluid={authors[0].avatar.fluid}
          className="rounded-full w-16 h-16"
        />
      </div>

      <div className="flex flex-col pl-3 w-3/4">
        <div className="text-gray-800 font-medium text-xl my-2">
          <span>
            {authors[0].firstName}
            &nbsp;
            {authors[0].lastName}
          </span>
        </div>
        <span
          className="text-gray-700  leading-relaxed mx-auto md:m-0"
          dangerouslySetInnerHTML={{
            __html: authors[0].bio.childMarkdownRemark.html,
          }}
        ></span>
      </div>
    </section>
  )
}

export default Author
