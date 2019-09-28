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
      <section className="flex flex-row py-6 justify-start flex-wrap">
        <div>
          <Img
            sizes={authors[0].avatar.fluid}
            className="rounded-full w-16 h-16"
          />
        </div>

        <div className="flex flex-col pl-2 w-64">
          <span className="text-gray-700 font-semibold tracking-wide">
            {authors[0].firstName}
            &nbsp;
            {authors[0].lastName}
          </span>
          <span className="text-gray-600  text-xs  leading-relaxed sm:visible ">
            {authors[0].bio.childMarkdownRemark.excerpt}
          </span>
        </div>
      </section>
    )
  }
}

export default Author
