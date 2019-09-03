import { Link } from "gatsby";
import React from "react";
import { graphql, useStaticQuery } from "gatsby"


function Logo() {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="flex items-center flex-shrink-0 mr-4">
      <Link to="/" className="pr-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.56 8.93l6.37-2.12a1 1 0 0 1 1.26 1.26l-2.12 6.37a1 1 0 0 1-.63.63l-6.37 2.12a1 1 0 0 1-1.26-1.26l2.12-6.37a1 1 0 0 1 .63-.63zm-.22 5.73l4-1.33 1.32-4-4 1.34-1.32 4z" /></svg>
      </Link>
      <Link to="/"><span
        className="text-gray-700 text-2xl tracking-widest">{data.site.siteMetadata.title}</span>
      </Link>
    </div>
  );
}

export default Logo;

