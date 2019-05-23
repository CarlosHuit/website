import React from 'react'
import './Header.css'
import Circle from '../Circle/Circle';
import profile from '../../profile.jpg'
import Toolbar from '../Toolbar/Toolbar'

class Header extends React.Component {

  s = ['Hi, i am', 'Carlos Huit']

  constructor(props) {

    super(props);
    this.state = {
      positions: [
        { x: '80%', y: '80%', size: 60, },
        { x: '10%', y: '15%', size: 72, },
        { x: '60%', y: '10%', size: 36, },
        { x: '32%', y: '81%', size: 36, },
      ]
    }

  }

  render() {

    return (
      <div className="Header" id="header" >


      <div className="App-decorators">
        { this.state.positions.map((e, i) => <Circle key={i} position={e} /> ) }
      </div>


      <div className="App-greeter">


        <div className="Greeter">

          {
            this.s.map((el, i) => <h1 key={i}>{el}</h1> )
          }

          <section className="Presentation">
            <p> Full Stack Developer </p>
          </section>

        </div>



        <div className="Profile-image">
          <img src={profile} alt=""/>
        </div>



      </div>

      <Toolbar />

    </div>


    )

  }

}

export default Header;