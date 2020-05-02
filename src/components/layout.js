import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => {
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
    <>
      <Header
        // navbarState={navbarState}
        // setNavbarState={setNavbarState}
        siteTitle={data.site.siteMetadata.title}
      />
      <div
        style={{
          margin: `5% auto`,
          padding: `0 1.0875rem 1.45rem`,
          maxWidth: "1400px",
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
