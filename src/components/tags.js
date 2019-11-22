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
            className="text-sm font-semibold text-red-500 mr-1 pr-1 border-r border-red-500"
          >
            {tag}
          </div>
        ))}
      </div>
    )
  }
}

export default Tags
