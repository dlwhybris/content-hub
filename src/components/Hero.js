import React from "react"
import Img from "gatsby-image"

const Hero = ({ hero }) => {
  return (
    <div className="bg-gray-100 relative">
      <Img fluid={hero.coverImage.fluid} className="object-cover w-full h-96" />
      <p
        className="absolute top-1/2 left-1/2 text-white text-2xl font-bold tracking-wide rotate-180 bg-black opacity-75 p-16"
        dangerouslySetInnerHTML={{
          __html: hero.textOnCover.childMarkdownRemark.html,
        }}
      ></p>
    </div>
  )
}

export default Hero
