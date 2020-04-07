import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#364f54`,
      marginBottom: `1.45rem`,
      borderBottom: "1px solid rgba(212, 212, 212, 0.2)",
      boxShadow: "rgba(212, 212, 212, 0.2) 0 1px 3px",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1400,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <nav>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/work">
            Work
          </Link>
          <a
            className="nav-link"
            href="https://blog.yuliysozin.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
          <Link className="nav-link" to="/about">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
