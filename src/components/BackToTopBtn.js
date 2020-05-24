import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"

const BackToTopBtn = () => {
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop)
      window.scrollTo(0, c - c / 8)
    }
  }

  return (
    <button
      href="#top"
      className="back-to-top"
      target="_blank"
      rel="noreferrer"
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </button>
  )
}

export default BackToTopBtn
