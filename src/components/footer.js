import React from "react"
import { Link } from "gatsby"

const footer = () => {
  return (
    <footer>
      <div
        style={{
          maxWidth: "1400px",
          margin: `0 auto`,
          fontSize: "0.8rem",
        }}
      >
        {" "}
        © {new Date().getFullYear()}, Built with Love. And Gatsby. By{" "}
        <Link
          style={{
            textDecoration: "none",
            color: "rgb(170, 144, 120)",
            margin: "0",
          }}
          to="/about"
        >
          Me.
        </Link>
      </div>
    </footer>
  )
}

export default footer
