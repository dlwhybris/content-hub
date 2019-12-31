// import { Link } from "gatsby"
import React from "react"
import Logo from "./Logo"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { useAuth } from "react-use-auth"

const Header = () => {
  const { isAuthenticated, login, logout, user } = useAuth()
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
        <Link to="/" title={data.site.siteMetadata.title}>
          <h1 className="text-xl md:text-3xl tracking-wide uppercase md:ml-4 font-light">
            {data.site.siteMetadata.title}
          </h1>
        </Link>
      </div>
      <div className="flex-grow text-sm">
        {isAuthenticated() ? (
          <button
            className="float-right mt-3 bg-white text-gray-800 rounded-sm px-4 py-1 font-semibold focus:outline-none hover:text-black"
            onClick={e => logout()}
          >
            <span>
              Log Out
              <span className="">&nbsp;({user.name})</span>
            </span>
          </button>
        ) : (
          <button
            className="float-right mt-3 bg-white text-gray-800 rounded-sm px-4 py-1 font-semibold focus:outline-none hover:text-black"
            onClick={() => login()}
          >
            Login
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
