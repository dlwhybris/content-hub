// import { Link } from "gatsby"
import React from "react"
import Logo from "./logo"
import { getProfile, logout, login } from "../utils/auth"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

function Header() {
  const user = getProfile()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className="bg-red-500 py-4 shadow-lg text-white flex px-8">
      <div className="flex flex-col md:flex-row">
        <Logo />
        <Link to="/">
          <div className="text-xl md:text-3xl tracking-wide uppercase md:ml-4">
            {data.site.siteMetadata.title}
          </div>
        </Link>
      </div>
      <div className="flex-grow">
        <div className="sm:text-sm float-right mt-3">
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
              <span className="text-white text-sm">&nbsp;({user.name})</span>
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
        </div>
      </div>
    </header>
  )
}

export default Header
