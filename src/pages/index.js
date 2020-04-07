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
      <h1>Yuliy Sozin</h1>
      <h2>Toronto Based Front-End Developer</h2>
      <div className="socials">
        <FontAwesomeIcon className="social-icon" icon={["fab", "twitter"]} />
        <FontAwesomeIcon
          className="social-icon"
          icon={["fab", "dribbble-square"]}
        />
        <FontAwesomeIcon className="social-icon" icon={["fab", "instagram"]} />
        <FontAwesomeIcon className="social-icon" icon={["fab", "github"]} />
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
