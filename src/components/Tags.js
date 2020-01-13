import React from "react"
import { Link } from "gatsby"
import { slugify } from "../utils/slugify"

const Tags = ({ tags }) => {
  if (!tags || tags.length === 0) {
    return <section></section>
  }
  return (
    <div className="flex flex-row flex-wrap -ml-2">
      {tags.map(tag => (
        <div
          key={tag}
          className="text-sm font-bold text-red-600 border-r border-red-500 uppercase last:border-r-0 px-2  last:pr-0"
        >
          <Link to={`tags/${slugify(tag)}`}>{tag}</Link>
        </div>
      ))}
    </div>
  )
}

export default Tags
