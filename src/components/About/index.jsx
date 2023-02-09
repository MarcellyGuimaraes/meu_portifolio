import React from 'react'
import './about.css'
import AboutImg from '../../assets/profile-pic.png'
import Curriculo from '../../assets/curriculo_programacao.pdf'
import Info from './Info'

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Sobre Mim</h2>
      <span className="section__subtitle">Minha Introdução</span>

      <div className="about__container container grid">
        <img src={AboutImg} className="about__img" alt="" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Desenvolvedora frontend, eu crio páginas principalmente utilizando o
            React.js e Tailwind
          </p>

          <a download="" href={Curriculo} className="button button--flex">
            Baixe meu currículo <i className="uil uil-file-download"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
