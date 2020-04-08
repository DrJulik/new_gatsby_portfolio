import React from "react"
import { Link } from "gatsby"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"
import Layout from "../components/layout"
import SEO from "../components/seo"
library.add(fab)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home">
      <h1>
        Yuliy <span style={{ color: "#aa9078" }}>Sozin</span>
      </h1>
      <h2>Toronto Based Front-End Developer</h2>
      <div className="socials">
        <a
          href="https://twitter.com/DesignsJulius"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="social-icon" icon={["fab", "twitter"]} />
        </a>
        <a
          href="https://dribbble.com/DrJULIK"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="social-icon"
            icon={["fab", "dribbble-square"]}
          />
        </a>
        <a
          href="https://www.instagram.com/julius.designs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="social-icon"
            icon={["fab", "instagram"]}
          />
        </a>
        <a
          href="https://github.com/DrJulik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="social-icon" icon={["fab", "github"]} />
        </a>
      </div>
      <div className="shortcuts">
        <p>
          Just want to see my work?{" "}
          <Link className="link" to="/work">
            To works!
          </Link>
        </p>
        <p>
          Potential Employer?{" "}
          <a className="link" href="/">
            My resume!
          </a>
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
