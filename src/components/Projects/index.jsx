import React from 'react'
import './projects.css'
import CardWithModal from './CardWithModal'
import curadoriaFilmes from '../../assets/projects/curadoria-filmes-app.png'
import horrorflix from '../../assets/projects/horrorflix-app.png'
import searchCep from '../../assets/projects/search-cep-app.png'
import todoApp from '../../assets/projects/todo-app.png'
import vuttrApp from '../../assets/projects/vuttr-app.png'
import woopisicredi from '../../assets/projects/woopisicredi-app.png'

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projetos</h2>
      <span className="section__subtitle">
        Alguns dos meus principais projetos.
      </span>

      <div className="projects__container container grid">
        <CardWithModal
          number={1}
          iconType="web-grid"
          title="Horrorflix"
          image_card={horrorflix}
          description_modal="Esse é um projetinho que eu fiz de clone da Netflix, onde eu mudei o tema e coloquei apenas coisas relacionadas a filmes/séries de terror."
          detail_1="Detalhe 1"
          detail_2="Detalhe 2"
        />
        <CardWithModal
          number={2}
          iconType="arrow"
          title="Curadoria de Filmes"
          image_card={curadoriaFilmes}
          description_modal="Um desafio onde eu tinha que utilizar a API The Movie Database para listar os filmes e séries mais assistidos do dia no mundo e marcar se você curte ou não."
          detail_1="Detalhe 1"
          detail_2="Detalhe 2"
        />
        <CardWithModal
          number={3}
          iconType="edit"
          title="Buscador de CEP"
          image_card={searchCep}
          description_modal="Um simples buscador de CEP. Você digita um CEP válido, e ele mostra informações como: rua, cidade e bairro."
          detail_1="Detalhe 1"
          detail_2="Detalhe 2"
        />
        <CardWithModal
          number={4}
          iconType="web-grid"
          title="To do App"
          image_card={todoApp}
          description_modal="Essa é uma lista de tarefas que consome dados de uma API no PlanetScale."
          detail_1="Detalhe 1"
          detail_2="Detalhe 2"
        />
        <CardWithModal
          number={5}
          iconType="arrow"
          title="Vuttr App"
          image_card={vuttrApp}
          description_modal="Essa é uma aplicação onde você pode adicionar, ver ou deletar ferramentas úteis para o trabalho."
          detail_1="Detalhe 1"
          detail_2="Detalhe 2"
        />
        <CardWithModal
          number={6}
          iconType="edit"
          title="Tabela de usuários com tela de login"
          image_card={woopisicredi}
          description_modal="Descrição 3"
          detail_1="Detalhe 1"
          detail_2="Detalhe 2"
        />

        <span>Ver mais no Github</span>
      </div>
    </section>
  )
}

export default Projects
