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
            Sou uma desenvolvedora web apaixonada pelo frontend, com habilidades
            em JavaScript, CSS, HTML, PHP, Python, React, Next e Laravel. Com um
            olho apurado para design e experiência do usuário, trabalho para
            criar interfaces intuitivas e acessíveis para a web. Além disso, sou
            apaixonada por aprender e estou sempre em busca de novos desafios e
            oportunidades para crescer como desenvolvedora.
          </p>

          <a download="" href={Curriculo} className="button button--flex">
            <i className="uil uil-file-download"></i> Baixe meu currículo
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
