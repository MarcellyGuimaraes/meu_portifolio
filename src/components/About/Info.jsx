import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="uil uil-award about__icon"></i>
        <h3 className="about__title">Experiência</h3>
        <span className="about__subtitle">3 Anos</span>
      </div>
      <div className="about__box">
        <i className="uil uil-briefcase-alt about__icon"></i>
        <h3 className="about__title">Projetos</h3>
        <span className="about__subtitle">+10 Projetos</span>
      </div>
    </div>
  )
}

export default Info
