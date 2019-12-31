import React from "react"
import AssetBlock from "../components/AssetBlock"
import CodeBlock from "../components/CodeBlock"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"

const Bold = ({ children }) => <span className="font-bold ">{children}</span>

const CustomComponent = ({ componentType, fields }) => {
  switch (componentType) {
    case "codeBlock":
      return (
        <>
          <CodeBlock
            fileName={fields.title["en-US"]}
            code={fields.code["en-US"]}
            language={fields.language["en-US"]}
          />
        </>
      )
    default:
      return (
        <>
          <pre>{JSON.stringify(componentType, null, 4)}</pre>
          <pre>{JSON.stringify(fields, null, 4)}</pre>
        </>
      )
  }
}

const RenderOptions = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: node => {
      return (
        <CustomComponent
          componentType={node.data.target.sys.contentType.sys.id}
          fields={node.data.target.fields}
        />
      )
    },
    [BLOCKS.PARAGRAPH]: (post, children) => (
      <div className="mt-4">{children}</div>
    ),
    [BLOCKS.HEADING_1]: (post, children) => (
      <h1 className="font-medium text-3xl mt-4 py-2 text-red-500">
        {children}
      </h1>
    ),
    [BLOCKS.HEADING_2]: (post, children) => (
      <h2 className="font-medium text-3xl mt-4 py-2 text-red-500">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (post, children) => (
      <h3 className="font-medium text-2xl mt-4 py-2 text-red-500">
        {children}
      </h3>
    ),
    [BLOCKS.UL_LIST]: (post, children) => (
      <ul className="pl-4 py-2"> {children}</ul>
    ),
    [BLOCKS.OL_LIST]: (post, children) => (
      <ol className="list-decimal text-red-500 pl-4"> {children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (post, children) => {
      return (
        <li className="text-red-400 flex content-center py-2 px-2">
          <div className="pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="fill-current w-5 h-5 inline-block"
            >
              <path
                d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zM7.879 7.879l7.778-3.536-3.536 7.778-7.778 3.536L7.88 7.879zM10 11a1 1 0 100-2 1 1 0 000 2z"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <span className="block text-gray-900 -mt-4">{children}</span>
        </li>
      )
    },
    [BLOCKS.QUOTE]: (post, children) => (
      <blockquote className="italic font-light border-l-2 border-red-400 ml-4 pl-2 my-6">
        {children}
      </blockquote>
    ),

    [INLINES.HYPERLINK]: (post, children) => {
      return (
        <a
          className="text-red-600 font-semibold cursor-pointer border-b border-red-500"
          href={post.data.uri}
        >
          {children}
        </a>
      )
    },

    [BLOCKS.EMBEDDED_ASSET]: node => {
      if (node.data.target.fields) {
        const { url, fileName, contentType } = node.data.target.fields.file[
          "en-US"
        ]
        switch (contentType) {
          /*               case "video/mp4":
                return <VideoBlock src={url} /> */
          case "image/png":
            return <AssetBlock title={fileName} src={url} />
          case "image/jpg":
            return <AssetBlock title={fileName} src={url} />
          case "image/jpeg":
            return <AssetBlock title={fileName} src={url} />
          default:
            return <></>
        }
      }
    },
  },
}

export default RenderOptions
