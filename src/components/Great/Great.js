import React from 'react'
import './Great.css'
import profile from '../../profile.jpg'

class Great extends React.Component {

  s = ['Hola, soy', 'Carlos Huit']

  render() {

    return (
      <div className="Great">


        <div className="Greater">

          {
            this.s.map((el, i) => <h1 key={i}>{el}</h1> )
          }

          <section className="Presentation">
            <p> Desarrollador Full Stack </p>
          </section>

        </div>



        <div className="Profile-image">
          <img src={profile} alt=""/>
        </div>



      </div>
    )

  }

}

export default Great;