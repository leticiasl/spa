import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import ContatoDetalhe from '../../components/contato-detalhe'


export default class Contato extends Component {

  state = {
    conteudo: {}
  }

  componentDidMount = () => {
    axios.get("http://localhost:4000/contato")
      .then(resposta => {
        this.setState({ conteudo: resposta.data })
      })
  }

  render() {
    const { conteudo } = this.state


    return (
      <>
        <Helmet>
          <title>Contato</title>
        </Helmet>

        <div className="page">
          <div className="conteudo">
            <div className="flex">
              <div className="resumo">
                <h1>{conteudo.titulo}</h1>
                <p>{conteudo.subtitulo}</p>
                <h2>{conteudo.informacao}</h2>

                {conteudo.contatos !== undefined && (
                  conteudo.contatos.map((item) => (
                    <>
                      <ContatoDetalhe tipo={item.tipo} contato={item.contato} />

                    </>
                  ))
                )}


              </div>
              <img src="http://trydo.rainbowit.net/assets/images/about/about-6.jpg" alt="Perfil" />
            </div>
          </div>
        </div>
      </>
    )
  }
}
