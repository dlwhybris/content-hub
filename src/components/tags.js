import React from "react"

class Tags extends React.Component {
  render() {
    const tags = this.props.tags
    if (!tags || tags.length === 0) {
      return <section></section>
    }
    return (
      <section>
        {tags.map(tag => (
          <span
            key={tag}
            className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1"
          >
            {tag}
          </span>
        ))}
      </section>
    )
  }
}

export default Tags
