import React from 'react';
import './AboutMe.css'
import Circle from '../Circle'

class AboutMe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      position1: { x: '10%', y: '90%', size: 30, color: '#00BCD4' },
      position2: { x: '45%', y: '90%', size: 30, color: '#00BCD4' },
      position3: { x: '80%', y: '90%', size: 30, color: '#00BCD4' },
    }
  }


  render() {

    return (

      <div className="Stack">

        <div className="Decoration">
          <Circle position={this.state.position1}/>
          <Circle position={this.state.position2}/>
          <Circle position={this.state.position3}/>
        </div>

        <div className="Container-about-me">


          <div className="About-me">

            <p className="Title">
              Sobre mi
            </p>

            <p className="About-me-text">
              Hola, soy <strong>Carlos Huit</strong>, desarrollador de <span>aplicaciones web (Front-end y Back-end)</span>, <span>aplicaciones móviles multiplataforma</span>, 
              <span> aplicaciones hibridas</span> y <span>aplicaciones de escritorio</span> (Windows, MacOS, Linux). En el mundo exterior soy un desarrollador de software ordiario,
              pero en secreto con la ayuda de mi laptop y unas tazas de cafe, peleo contra los bugs para crear aplicaciones asombrosas que ayuden a la comunidad. Suelo estar en constante 
              aprendizaje sobre las nuevas tendencias en el desarrollo de software y en la medida de lo posible intento compartir todos mis conocimientos. Actualmente trabajo arduamente en el
              desarrollo de una app con la que espero poder ayudar a miles de personas que no cuentan con accesso a una educacion de calidad. Y finalmente sigo trabajando para alcanzar
              la mejor version de mi vida.
            </p>

          </div>

        </div>




      </div>

    );

  }

}

export default AboutMe