import React from "react"

const CodeBlock = ({ fileName, code }) => {
  return (
    <div
      className="mt-4 p-2"
      dangerouslySetInnerHTML={{
        __html: code,
      }}
    ></div>
  )
}

export default CodeBlock
