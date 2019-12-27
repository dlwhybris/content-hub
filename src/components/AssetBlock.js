import React from "react"

const AssetBlock = ({ src, title }) => {
  return (
    <div className="w-120 py-4 p-2">
      <picture className="">
        <source srcSet={src + "?fm=webp&fit=fill"} type="image/webp" />
        <source
          srcSet={src + "?fm=jpg&fl=progressive&fit=fill&w="}
          type="image/jpeg"
        />
        <img
          src={src + "?fm=jpg&fl=progressive&fit=fill&w="}
          alt={title}
          loading="lazy"
          className="object-cover"
        />
      </picture>
    </div>
  )
}

export default AssetBlock
