import React from "react"
import DemoImage from "../../content/assets/demo1.jpg"

const Hero = () => {
  return (
    <div className="bg-gray-100 relative">
      <img
        src={DemoImage}
        // src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80&sat=-80&blend=F9B5B1&blend-mode=multiply"
        className="object-cover w-full h-96"
        alt="Content hub delaware"
      />
      <p className="absolute top-1/2 left-1/2 text-red-100 text-2xl font-semibold tracking-wide rotate-180">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Varius quam quisque
        id diam vel quam elementum pulvinar etiam. Quis lectus nulla at volutpat
        diam ut venenatis.
      </p>
    </div>
  )
}

export default Hero
