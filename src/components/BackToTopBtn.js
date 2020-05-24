import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
import Rotate from "react-reveal/Rotate"

class BackToTopBtn extends Component {
  state = { hasScrolled: false }

  componentDidMount() {
    document.addEventListener("scroll", this.onScroll)
  }

  onScroll = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop
    if (c > 200 && !this.state.hasScrolled) {
      this.setState({ hasScrolled: true })
    } else if (c < 100 && this.state.hasScrolled) {
      this.setState({ hasScrolled: false })
    }
  }

  scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop
    if (c > 0) {
      window.requestAnimationFrame(this.scrollToTop)
      window.scrollTo(0, c - c / 8)
    }
  }

  render() {
    return (
      <>
        {this.state.hasScrolled && (
          <Rotate bottom right>
            <button
              href="#top"
              className="back-to-top"
              target="_blank"
              rel="noreferrer"
              onClick={this.scrollToTop}
            >
              <FontAwesomeIcon icon={faAngleUp} />
            </button>
          </Rotate>
        )}
      </>
    )
  }
}

export default BackToTopBtn
