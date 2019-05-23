import React from 'react';
import './Projects.css'
import Triangle from '../decoration/trinangle/Triangle';

class Projects extends React.Component {

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

    const scrollOptions = {
      behavior: 'smooth',
      top: 736.0,
    }

    // window.scrollTo(scrollOptions);

    return (
      <div className="Projects" id="proyectos" >
        <div className="Stack">

          <div className="Decoration">
            <Triangle direction="top"/>
            <Triangle direction="bottom"/>
          </div>

          <div className="Two-rows">

            <p className="Title">
              Portafolio
            </p>

            <div className="Container-Projects">

              <div className="Card">

              </div>

            </div>

          </div>


        </div>
      </div>
    )

  }

}

export default Projects;