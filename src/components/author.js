import React from "react"
import Img from "gatsby-image"

class Author extends React.Component {
  render() {
    const authors = this.props.authors
    console.log(authors)
    if (!authors) {
      return null
    }
    return (
      <section className="flex flex-row py-6">
        <Img
          sizes={authors[0].avatar.fluid}
          className="rounded-full w-16 h-16"
        />
        <div className="flex flex-col text-gray-800 font-semibold tracking-wide leading-normal pl-2">
          <span>
            {authors[0].firstName}
            &nbsp;
            {authors[0].lastName}
          </span>
          <span className="text-gray-700 font-semibold text-xs tracking-wide leading-normal sm:visible ">
            {authors[0].bio.childMarkdownRemark.excerpt}
          </span>
        </div>
      </section>
    )
  }
}

export default Author
