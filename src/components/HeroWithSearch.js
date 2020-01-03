import React from "react"
import BackgroundImage from "gatsby-background-image"

const HeroWithSearch = ({ hero }) => {
  return (
    <div className="bg-gray-100">
      <BackgroundImage
        Tag="section"
        className="w-full h-96 flex"
        fluid={hero.coverImage.fluid}
      >
        <div className="self-center flex mx-auto">
          <div className="flex mr-10">
            <input
              type="text"
              className="bg-white rounded-l-full px-8 py-4 text-gray-700"
              placeholder="I'm interested in"
            />
            <button className="text-white bg-red-500 font-bold rounded-r-full py-4 px-8">
              Search
            </button>
          </div>
          <div class="inline-block relative w-40">
            <select class="block appearance-none w-full bg-white focus:outline-none focus:shadow-outline rounded-full py-4 px-8 text-gray-700">
              <option>All </option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white bg-red-500 rounded-r-full">
              <svg
                class="fill-current h-6 w-6"
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
