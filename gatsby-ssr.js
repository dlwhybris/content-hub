import React from "react"
import { navigate } from "gatsby"

import { AuthProvider } from "react-use-auth"

export const wrapRootElement = ({ element }) => (
  <AuthProvider
    navigate={navigate}
    auth0_domain={process.env.GATSBY_AUTH0_DOMAIN}
    auth0_client_id={process.env.GATSBY_AUTH0_CLIENTID}
  >
    {element}
  </AuthProvider>
)
