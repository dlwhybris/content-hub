import React from "react"

const AssetBlock = ({ src, title }) => {
  return (
    <div className="w-full flex justify-center py-4">
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
          className="object-cover max-h-screen-1/2"
        />
      </picture>
    </div>
  )
}

export default AssetBlock
