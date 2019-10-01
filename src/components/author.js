import React from "react"
import Img from "gatsby-image"

class Author extends React.Component {
  render() {
    const authors = this.props.authors
    if (!authors) {
      return null
    }
    return (
      <section className="flex flex-row py-6 flex-wrap mx-auto items-center">
        <div className="mx-auto md:m-0">
          <Img
            sizes={authors[0].avatar.fluid}
            className="rounded-full w-16 h-16"
          />
        </div>

        <div className="flex flex-col pl-2 md:w-72 w-full">
          <span className="text-gray-700 font-semibold tracking-wide mx-auto md:m-0 ">
            {authors[0].firstName}
            &nbsp;
            {authors[0].lastName}
          </span>
          <span className="text-gray-600 text-xs leading-relaxed mx-auto md:m-0 w-72">
            {authors[0].bio.childMarkdownRemark.excerpt}
          </span>
        </div>
      </section>
    )
  }
}

export default Author
