import React from "react"
//import SyntaxHighlighter from "react-syntax-highlighter"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"
//import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"

const CodeBlock = ({ fileName, code, language }) => {
  return (
    <div className="py-4">
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        //showLineNumbers="true"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeBlock
