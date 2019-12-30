// import { Link } from "gatsby"
import React from "react"
import Logo from "./Logo"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

function login() {}
function logout() {}

const Header = () => {
  const user = {}
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
          <h1 className="text-xl md:text-3xl tracking-wide uppercase md:ml-4 font-light">
            {data.site.siteMetadata.title}
          </h1>
        </Link>
      </div>
      <div className="flex-grow text-white text-sm font-semibold">
        <div className="float-right mt-3">
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
              <span className="">&nbsp;({user.name})</span>
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
