import React from "react"
import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";


function Layout({ children }) {
  return (
    <div className="bg-gray-100 antialiased">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
