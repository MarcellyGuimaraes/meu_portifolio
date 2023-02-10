import React, { useState } from 'react'
import CardWithModal from './CardWithModal'
import './services.css'

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Serviços</h2>
      <span className="section__subtitle">O que eu faço</span>

      <div className="services__container container grid">
        <CardWithModal
          number={1}
          iconType="web-grid"
          title="Design UX/UI"
          description_modal="Descrição 1"
          detail_1="Detalhe 1"
          detail_2="Detalhe 2"
          detail_3="Detalhe 3"
        />
        <CardWithModal
          number={2}
          iconType="arrow"
          title="Criação de sites"
          description_modal="Descrição 2"
          detail_1="Detalhe 1"
          detail_2="Detalhe 2"
          detail_3="Detalhe 3"
        />
        <CardWithModal
          number={3}
          iconType="edit"
          title="Integração com APIs"
          description_modal="Descrição 3"
          detail_1="Detalhe 1"
          detail_2="Detalhe 2"
          detail_3="Detalhe 3"
        />
      </div>
    </section>
  )
}

export default Services
