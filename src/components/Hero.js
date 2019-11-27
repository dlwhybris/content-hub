import React from "react"
import Img from "gatsby-image"

const Hero = ({ hero }) => {
  return (
    <div className="bg-gray-100 relative">
      <Img fluid={hero.coverImage.fluid} className="object-cover w-full h-96" />
      <p
        className="invisible lg:visible absolute top-1/2 left-1/2 text-white text-2xl font-bold tracking-wide rotate-180 bg-black opacity-75 p-4 xl:p-16"
        dangerouslySetInnerHTML={{
          __html: hero.textOnCover.childMarkdownRemark.html,
        }}
      ></p>
      <p className="visible lg:invisible absolute top-1/2 left-1/2 text-white sm:text-2xl text-xl font-bold tracking-wide rotate-180 bg-black opacity-75 sm:p-8 p-6">
        {hero.textOnCover.childMarkdownRemark.excerpt}
      </p>
    </div>
  )
}

export default Hero
