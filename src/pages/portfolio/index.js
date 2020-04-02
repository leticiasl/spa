import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import axios from 'axios'
import Imagem from '../../components/imagem'

export default class Portfolio extends Component {

  state = {
    conteudo: {}
  }

  componentDidMount = () => {
    axios.get("http://localhost:4000/portfolio")
      .then(resposta => {
        this.setState({ conteudo: resposta.data })
      })
  }

  render() {
    const { conteudo } = this.state

    return (
      <>
        <Helmet>
          <title>Portfolio</title>
        </Helmet>
        {console.log(conteudo)}

        <div className="page">
          <div className="conteudo">
            <h1>{conteudo.titulo}</h1>
            <div className="flex">
              <div className="portfolio-list">
                {conteudo.imagens !== undefined && (
                  conteudo.imagens.map((imagem) => (
                    <>
                      <Imagem foto={imagem.foto} id={imagem.id} />
                    </>
                  ))
                )}

              </div>
            </div>
          </div>
        </div>

      </>
    )
  }
}



