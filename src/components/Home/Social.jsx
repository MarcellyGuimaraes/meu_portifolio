import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/MarcellyGuimaraes"
        target="_blank"
        className="home__social-icon"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/marcellyguimaraes/"
        target="_blank"
        className="home__social-icon"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="mailto:souzaguimaraesmarcelly@gmail.com"
        target="_blank"
        className="home__social-icon"
      >
        <i className="uil uil-envelope-alt"></i>
      </a>
    </div>
  )
}

export default Social
