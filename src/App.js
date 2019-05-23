import React from 'react';
import './App.css';
import Circle from './components/Circle/Circle';
import profile from './profile.jpg'
import AboutMe from './components/about-me/AboutMe';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills'
import Toolbar from './components/Toolbar/Toolbar';
import Footer from './components/Footer/Footer';

class App extends React.Component {

  s = ['Hi, i am', 'Carlos Huit']

  constructor(props) {
    super(props);
    this.state = {
      positions: [
        { x: '80%', y: '80%', size: 60 },
        { x: '10%', y: '15%', size: 72, },
        { x: '60%', y: '10%', size: 36, },
        { x: '32%', y: '81%', size: 36, },
      ]
    }
  }



  render() {

    return (
      <div className="App">

        <div className="App-header" id="appHeader" >


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

        <div className="Body">

          <AboutMe />
          <Skills />
          <Projects />

        </div>

        <Footer />

      </div>
    )
  }

}

export default App
