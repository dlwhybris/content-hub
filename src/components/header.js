import { Link } from "gatsby"
import React from "react"
import Logo from "./logo"
import { getProfile, logout, login } from "../utils/auth"

function Header() {
  const user = getProfile()
  return (
    <header className="bg-white border-t border-indigo-300 shadow-lg">
      <nav className="py-4 mx-auto max-w-xs xl:max-w-6xl  lg:max-w-4xl md:max-w-2xl sm:max-w-xl flex items-center justify-between py-4">
        <div className="w-1/2">
          <Logo />
        </div>
        <div className="w-1/2">
          <div className="text-xs sm:text-sm flex justify-around">
            <Link
              to="/blog"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 tracking-wider font-semibold hover:text-indigo-500 mr-4"
            >
              Posts
            </Link>
            <p>
              <p>
                {user.name ? (
                  user.name
                ) : (
                  <a
                    href="#login"
                    onClick={e => {
                      login()
                      e.preventDefault()
                    }}
                  >
                    Login
                  </a>
                )}
              </p>
            </p>
            <section>
              {user.name ? (
                <a
                  href="#logout"
                  onClick={e => {
                    logout()
                    e.preventDefault()
                  }}
                >
                  Log Out
                </a>
              ) : (
                ""
              )}
            </section>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
