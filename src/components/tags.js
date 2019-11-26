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
            className="text-sm font-bold text-red-500 mr-2 pr-2 border-r border-red-500 uppercase"
          >
            {tag}
          </div>
        ))}
      </div>
    )
  }
}

export default Tags
