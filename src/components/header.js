import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

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
      <a
        href="#main-menu"
        className="menu-toggle"
        id="main-menu-toggle"
        aria-label="Open main menu"
      >
        <span className="sr-only">Open main menu</span>
        <FontAwesomeIcon className="social-icon" icon={faBars} />
      </a>
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
        <nav aria-label="Main menu" className="main-menu" id="main-menu">
          <a
            href="#main-menu-toggle"
            id="main-menu-close"
            className="menu-close"
            aria-label="Close main menu"
          >
            <span className="sr-only">Close main menu</span>
            <FontAwesomeIcon
              icon={faTimes}
              aria-hidden="true"
            ></FontAwesomeIcon>
          </a>
          <ul>
            <li>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/work">
                Work
              </Link>
            </li>
            <li>
              <a
                className="nav-link"
                href="https://blog.yuliysozin.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <a
          href="#main-menu-toggle"
          className="backdrop"
          tabIndex="-1"
          aria-hidden="true"
          hidden
        >
          backdrop
        </a>
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
