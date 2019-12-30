import React from "react"

const Tags = ({ tags }) => {
  if (!tags || tags.length === 0) {
    return <section></section>
  }
  return (
    <div className="flex flex-row flex-wrap">
      {tags.map(tag => (
        <div
          key={tag}
          className="text-sm font-bold text-red-500 border-r border-red-500 uppercase last:border-r-0 px-2 first:pl-0 last:pr-0"
        >
          {tag}
        </div>
      ))}
    </div>
  )
}

export default Tags
