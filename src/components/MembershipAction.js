import React from "react"

const MembershipAction = () => {
  return (
    <div className="bg-white text-gray-700 p-20 rounded-sm shadow-lg">
      <h2 className="text-red-500 uppercase font-semibold text-3xl mb-8 tracking-wide flex content-center">
        <span className="inline-block">Become a premium member</span>
        <div className="inline-block ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="fill-current w-6 h-6"
          >
            <path
              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </h2>
      <p className=" text-xl text-gray-700 tracking-wide">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. A erat nam at
        lectus. Nisl nisi scelerisque eu ultrices vitae auctor. Urna porttitor
        rhoncus dolor purus. Turpis egestas maecenas pharetra convallis posuere
        morbi leo urna molestie.
      </p>
    </div>
  )
}

export default MembershipAction
