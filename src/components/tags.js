import React from "react"

class Tags extends React.Component {
  render() {
    const tags = this.props.tags
    if (!tags || tags.length === 0) {
      return <section></section>
    }
    return (
      <div className="flex flex-row flex-wrap">
        {tags.map(tag => (
          <div
            key={tag}
            className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-2"
          >
            {tag}
          </div>
        ))}
      </div>
    )
  }
}

export default Tags
