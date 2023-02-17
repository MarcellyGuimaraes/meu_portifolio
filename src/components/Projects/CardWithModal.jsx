import React, { useState } from 'react'
// 377X547
const CardWithModal = ({
  title,
  number,
  description_modal,
  detail_1,
  detail_2,
  image_card,
}) => {
  const [toggle, setToggle] = useState(0)

  const toggleTab = (index) => setToggle(index)

  return (
    <div className="projects__content">
      <img src={image_card} className="project__image" />
      <div>
        <h3 className="projects__title">{title}</h3>
      </div>
      <span className="projects__button" onClick={() => toggleTab(number)}>
        Ver mais
        <i className="uil uil-arrow-right projects__button-icon"></i>
      </span>

      <div
        className={
          toggle === number ? 'projects__modal active-modal' : 'projects__modal'
        }
      >
        <div className="projects__modal-content">
          <i
            onClick={() => toggleTab(0)}
            className="uil uil-times projects__modal-close"
          ></i>

          <h3 className="projects__modal-title">{title}</h3>
          <p className="projects__modal-description">{description_modal}</p>

          <ul className="projects__modal-projects grid">
            <li className="projects__modal-service">
              <i className="uil uil-check-circle projects__modal-icon"></i>
              <p className="projects__modal-info">{detail_1}</p>
            </li>
            <li className="projects__modal-service">
              <i className="uil uil-check-circle projects__modal-icon"></i>
              <p className="projects__modal-info">{detail_2}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardWithModal
