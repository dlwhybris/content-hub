import React from "react"
import { navigate } from "gatsby"

import { AuthProvider } from "react-use-auth"

export const wrapRootElement = ({ element }) => (
  <AuthProvider
    navigate={navigate}
    auth0_domain="content-hub-test.eu.auth0.com"
    auth0_client_id="gQvhh7pm0ijyx3hFACXvrT26nXvPRc26"
  >
    {element}
  </AuthProvider>
)