import React from "react"

const AssetBlock = ({ src, title }) => {
  return (
    <div className="py-4 p-2">
      <picture className="w-full">
        <source srcSet={src + "?fm=webp&fit=fill"} type="image/webp" />
        <source
          srcSet={src + "?fm=jpg&fl=progressive&fit=fill&w="}
          type="image/jpeg"
        />
        <img
          src={src + "?fm=jpg&fl=progressive&fit=fill&w="}
          alt={title}
          loading="lazy"
        />
      </picture>
    </div>
  )
}

export default AssetBlock
