import React from 'react';
import './App.css';
import AboutMe from './components/about-me/AboutMe';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

class App extends React.Component {


  render() {

    return (
      <div className="App">

        <Header />

        <AboutMe />
        <Skills />
        <Projects />
 
        <Footer />

      </div>
    )
  }


}

export default App
