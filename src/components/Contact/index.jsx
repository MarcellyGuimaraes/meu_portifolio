import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

import './contacts.css'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_z452bdq',
      'template_wrwokcd',
      form.current,
      'XeOpeO9ovtPNIw47q',
    )
    e.target.reset()
  }

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Meus contatos</h2>
      <span className="section__subtitle">Contact me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Me mande uma mensagem! :D</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="uil uil-envelope-alt contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                souzaguimaraesmarcelly@gmail.com
              </span>
              <a href="" className="contact__button">
                Write me{' '}
                <i className="uil uil-arrow-right contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="uil uil-linkedin-alt contact__card-icon"></i>
              <h3 className="contact__card-title">Linkedin</h3>
              <span className="contact__card-data">
                Marcelly Souza Guimarães
              </span>
              <a href="" className="contact__button">
                Write me{' '}
                <i className="uil uil-arrow-right contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me a message</h3>

          <form className="contact__form" ref={form} onSubmit={sendEmail}>
            <div className="contact__form-div">
              <label className="contact__form-tag">Nome</label>
              <input
                name="nome"
                type="text"
                placeholder="Digite seu nome"
                className="contact__form-input"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                name="email"
                placeholder="Digite seu email"
                type="email"
                className="contact__form-input"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Mensagem</label>
              <textarea
                name="message"
                className="contact__form-input"
                cols="30"
                rows="10"
                placeholder="Digite sua mensagem"
              ></textarea>
            </div>
            <button className="button button--flex">Enviar!</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
