// import { Link } from "gatsby"
import React from "react"
import Logo from "./logo"
import { getProfile, logout, login } from "../utils/auth"

function Header() {
  const user = getProfile()
  return (
    <header className="bg-white border-t border-indigo-300 shadow-lg">
      <nav className="py-4 mx-auto max-w-md lg:max-w-4xl xl:max-w-6xl   flex items-center justify-between py-4">
        <div className="w-1/2">
          <Logo />
        </div>
        <div className="w-1/2">
          <div className="text-xs sm:text-sm flex float-right">
            <section>
              {user.name ? (
                <span>
                  <a
                    href="#logout"
                    onClick={e => {
                      logout()
                      e.preventDefault()
                    }}
                  >
                    Log Out
                  </a>
                  <span className="text-gray-600 text-sm">
                    &nbsp;({user.name})
                  </span>
                </span>
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
            </section>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
