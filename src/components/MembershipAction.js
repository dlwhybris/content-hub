import React from "react"
import { useAuth } from "react-use-auth"

const MembershipAction = () => {
  const { login } = useAuth()

  return (
    <div className="my-20 flex flex-col justify-center">
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
          Are you eager to follow the latest release information, useful
          configuration information and best practices? On the delaware Content
          Hub you'll find experts testimonials and guidance. Going from
          information about SAP releases to latest technology trends like AI and
          machine learning. Do you want to read them all? You can sign up here!
        </p>
      </div>
      <button
        onClick={() => login()}
        className="bg-red-500 text-white uppercase font-bold text-2xl px-8 py-3"
      >
        Sign in
      </button>
    </div>
  )
}

export default MembershipAction
