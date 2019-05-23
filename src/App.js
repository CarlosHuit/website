import React from 'react';
import './App.css';
import Circle from './components/Circle';
import profile from './profile.jpg'
import AboutMe from './components/about-me/AboutMe';
import Projects from './components/projects/Projects';
import Skills from './components/Skills/Skills'

class App extends React.Component {

  s = ['Hi, i am', 'Carlos Huit']

  constructor(props) {
    super(props);
    this.state = {
      position: { x: '80%', y: '80%', size: 60 },
      position1: { x: '10%', y: '15%', size: 72, },
      position2: { x: '60%', y: '10%', size: 36, },
      position3: { x: '32%', y: '81%', size: 36, },
    }
  }



  render() {

    return (
      <div className="App">

        <div className="App-header">


          <div className="App-decorators">
            <Circle position={this.state.position1}/>
            <Circle position={this.state.position}/>
            <Circle position={this.state.position2}/>
            <Circle position={this.state.position3}/>
          </div>


          <div className="App-greeter">

            <div className="Greeter">
              {
                this.s.map((el, i) => <h1 key={i}>{el}</h1> )
              },
              <section className="Presentation">
                <p>
                  Full Stack Developer
                </p>

              </section>
            </div>

            <div className="Profile-image">
              <img src={profile} alt=""/>
            </div>

          </div>


        </div>

        <div className="Body">

          <AboutMe />
          <Skills / >
          <Projects />

        </div>

      </div>
    );
  }

}

export default App;
