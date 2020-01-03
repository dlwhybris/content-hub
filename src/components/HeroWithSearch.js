import React from "react"
import BackgroundImage from "gatsby-background-image"

const HeroWithSearch = ({ hero }) => {
  const tags = ["Commerce", "Sales"]
  const backgroundImageStyle = {
    backgroundColor: "hsla(0,0%,100%,0.30)",
    backgroundBlendMode: "overlay",
  }
  return (
    <div className="bg-gray-100">
      <BackgroundImage
        Tag="section"
        className="w-full h-96 flex"
        fluid={hero.coverImage.fluid}
        style={backgroundImageStyle}
      >
        <div className="self-center flex mx-auto">
          <div className="flex mr-10">
            <input
              type="text"
              className="bg-white rounded-l-full px-8 py-4 text-gray-700 focus:outline-none border-2 border-white focus:border-2 focus:border-red-300 focus:border-r-0"
              placeholder="I'm interested in"
            />
            <button className="text-white bg-red-500 font-bold rounded-r-full py-4 px-8 uppercase tracking-wide">
              Search
            </button>
          </div>
          <div className="inline-block relative w-64">
            <select className="block appearance-none w-full bg-white focus:outline-none rounded-full py-4 px-8 text-gray-700 border-2 border-white">
              <option>All </option>
              {tags.map(tag => {
                return <option key={tag}>{tag} </option>
              })}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white bg-red-500 rounded-r-full">
              <svg
                className="fill-current h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default HeroWithSearch
