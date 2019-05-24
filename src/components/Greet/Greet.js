import React from 'react'
import './Greet.css'
import profile from '../../profile.jpg'

class Greet extends React.Component {

  s = ['Hola, soy', 'Carlos Huit']
  m = [
    'Front-End',
    'Back-End',
    'Mobile App',
    'Desktop App',
    'Web App',
    'Server App'
  ]

  render() {

    return (
      <div className="Great">


        <div className="Greater">

          {
            this.s.map((el, i) => <h1 key={i}>{el}</h1> )
          }

          <section className="Presentation">
            <div className="Presentation-list" >
              {
                this.m.map((e, i) => <p key={i}>{e}</p>)
              }
            </div>
            <div className="Dev-text">
              <p>
                Developer
              </p>
            </div>
            {/* <p> Desarrollador Full Stack </p> */}
          </section>

        </div>



        <div className="Profile-image">
          <img src={profile} alt=""/>
        </div>



      </div>
    )

  }

}

export default Greet;