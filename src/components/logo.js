import { Link } from "gatsby"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

function Logo() {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="flex items-center flex-shrink-0 mr-4">
      <Link to="/">
        <span className="text-2xl tracking-widest">
          {data.site.siteMetadata.title}
        </span>
      </Link>
    </div>
  )
}

export default Logo
