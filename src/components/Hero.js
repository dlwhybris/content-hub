import React from "react"
import DemoImage from "../../content/assets/demo1.jpg"

const Hero = () => {
  return (
    <div className="bg-gray-100">
      <img
        src={DemoImage}
        className="object-cover w-full h-96"
        alt="Content hub delaware"
      />
    </div>
  )
}

export default Hero
