import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "d-logo.png" }) {
        relativePath
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="block w-32 mt-2 h-full">
      <Link to="/">
        <Img fluid={data.file.childImageSharp.fluid} />
      </Link>
    </div>
  )
}

export default Logo
