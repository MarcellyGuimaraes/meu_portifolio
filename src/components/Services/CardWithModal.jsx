import React, { useState } from 'react'

const CardWithModal = ({
  title,
  iconType,
  number,
  description_modal,
  detail_1,
  detail_2,
  detail_3,
}) => {
  const [toggle, setToggle] = useState(0)

  const toggleTab = (index) => setToggle(index)

  return (
    <div className="services__content">
      <div>
        <i className={`uil uil-${iconType} services__icon`}></i>
        <h3 className="services__title">{title}</h3>
      </div>
      <span className="services__button" onClick={() => toggleTab(number)}>
        Ver mais
        <i className="uil uil-arrow-right services__button-icon"></i>
      </span>

      <div
        className={
          toggle === number ? 'services__modal active-modal' : 'services__modal'
        }
      >
        <div className="services__modal-content">
          <i
            onClick={() => toggleTab(0)}
            className="uil uil-times services__modal-close"
          ></i>

          <h3 className="services__modal-title">{title}</h3>
          <p className="services__modal-description">{description_modal}</p>

          <ul className="services__modal-services grid">
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">{detail_1}</p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">{detail_2}</p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">{detail_3}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardWithModal
