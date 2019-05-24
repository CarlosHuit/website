import React from 'react';
import Circle from '../Circle/Circle';
import Toolbar from '../Toolbar/Toolbar';
import './Header.css';
import Greet from '../Greet/Greet';
import Particles from 'react-particles-js';


class Header extends React.Component {


  constructor(props) {

    super(props);
    this.state = {
      ammount: 50,
      positions: [
        { x: '80%', y: '80%', size: 60, },
        { x: '10%', y: '15%', size: 72, },
        { x: '60%', y: '10%', size: 36, },
        { x: '32%', y: '81%', size: 36, },
      ]
    }

  }


  componentDidMount() {

    this.setState({
      ammount: parseInt(window.innerWidth * 0.07)
    })

    window.addEventListener('resize', this.calcAmout)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calcAmout)
  }

  calcAmout = (ev) => {
    this.setState({
      ammount: parseInt(window.innerWidth * 0.07)
    });
  }

  render() {

    return (
      <div className="Header" id="header" >

        <div className="Particles-container">
          < Particles
            width={window.innerWidth}
            height={window.innerHeight}
            params={{
              "particles": {
                "number": {
                  "value": this.state.ammount
                },
                "size": {
                  "value": 3
                },
              },
              "interactivity": {
                "events": {
                  "onhover": {
                    "enable": false,
                    "mode": "repulse"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "repulse"
                  }
                },
                "modes": {
                  "repulse": {
                    "distance": 280,
                    "duration": 0.4
                  },
                }
              },
            }} 
          />
        </div>

        <div className="App-decorators">
          { this.state.positions.map((e, i) => <Circle key={i} position={e} /> ) }
        </div>

        <Greet />

        <Toolbar />

      </div>


    )

  }

}

export default Header;