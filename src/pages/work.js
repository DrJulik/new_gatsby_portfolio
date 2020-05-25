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
        <p style={{ marginBottom: "2rem", fontSize: "0.85rem" }}>
          *Note: not all projects have urls and githubs, for privacy reasons. If
          you really wanna see them, email me, and I'll share. Maybe.
        </p>
        <Projects />
        <BackToTopBtn />
      </div>
    </Layout>
  )
}

export default about
