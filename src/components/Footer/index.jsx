import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Marcelly Guimarães!</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Sobre
            </a>
          </li>
          <li>
            <a href="#portifolio" className="footer__link">
              Projetos
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contato
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="" target="_blank" className="footer__social-icon">
            <i className="uil uil-github-alt"></i>
          </a>
          <a href="" target="_blank" className="footer__social-icon">
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a href="" target="_blank" className="footer__social-icon">
            <i className="uil uil-envelope-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          © 2023 Powered By Marcelly Guimarães
        </span>
      </div>
    </footer>
  )
}

export default Footer
