import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Projects from "../components/Projects/Projects"

const about = () => {
  return (
    <Layout>
      <SEO title="Work" />
      <div className="work-container">
        <h1 className="page-title">My Projects</h1>
        <Projects />
      </div>
    </Layout>
  )
}

export default about
