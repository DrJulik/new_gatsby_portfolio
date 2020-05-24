import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/Projects/Projects"
import BackToTopBtn from "../components/BackToTopBtn"

const about = () => {
  return (
    <Layout>
      <SEO title="Work" id="top" />
      <div className="work-container">
        <h1 className="page-title">My Projects</h1>
        <Projects />
        <BackToTopBtn />
      </div>
    </Layout>
  )
}

export default about
