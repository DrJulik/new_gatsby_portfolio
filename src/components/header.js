import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

const header = ({ siteTitle }) => {
  return (
    <Navbar fixed="top" expand="lg">
      <div className="container">
        <Navbar.Brand>
          <Link to="/">{siteTitle}</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="navbar-nav">
          <Nav>
            <Link className="nav-link" to="/about">
              About
            </Link>

            <Link className="nav-link" to="/work">
              Work
            </Link>
            <Nav.Link href="https://blog.yuliysozin.dev" target="_blank">
              Blog
            </Nav.Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default header
