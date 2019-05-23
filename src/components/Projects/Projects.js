import React from 'react';
import './Projects.css'
import Triangle from '../decoration/trinangle/Triangle';
import Card from '../Card/Card';

class Projects extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      projects: [
        {
          name: 'Weduc',
          desc: 'Aplicacion web que intenta optimizar elproceso de aprendizaje en los campos de lectura haciendo uso de reconocomiento de voz y lectura utilizando el reconociento de patrones y tts.',
          type: ['PWA', 'Web', 'SPA'],
          tags: ['Angular', 'HTML', 'JavaScript', 'CSS', 'TypeScript', 'Web API', 'Angular Material', 'Stylus', 'Youtube API'],
          url: 'https://github.com/CarlosHuit/weduc',
          app: 'https://weduc.herokuapp.com',
        },
        {
          name: 'Weduc Mobile',
          desc: 'Aplicacion movil multi plataforma que intenta optimizar elproceso de aprendizaje en los campos de lectura haciendo uso de reconocomiento de voz y lectura utilizando el reconociento de patrones y tts.',
          type: ['Android', 'iOS', 'Multi Plataforma'],
          tags: ['Fluter', 'Dart', 'Java', 'Material Design', 'Cupertino iOS', 'Swift'],
          url: 'https://github.com/CarlosHuit/flutter-app'
        },
        {
          name: 'Weduc API',
          desc: 'Api Rest que sirve y admnistra la informacion de la aplicacion Weduc, para las versiones Desktop, Mobile y Web.',
          type: ['SERVER', 'API REST', 'MVC'],
          tags: ['ExpressJS', 'NestJS', 'JavaScript', 'TypeScript', 'MongoDB', 'MySQL', 'FastifyJS'],
          url: 'https://github.com/CarlosHuit'
        },
        {
          name: 'Personal Web Site',
          desc: 'Sitio web personal.',
          type: ['PWA', 'Web', 'SPA'],
          tags: ['ReactJS', 'CSS', 'HTML', 'TypeScript', 'JavaScript'],
          url: 'https://github.com/CarlosHuit'
        },
        {
          name: 'Sales Point',
          desc: 'Aplicacion web para gestionar existencias de inventario, ventas, devoluciones y compras de un punto de ventas o almacen.',
          type: ['PWA', 'Web', 'SPA', 'Desktop'],
          tags: ['Angular', 'HTML', 'CSS', 'JSON', 'Angular Material', 'Stylus', 'JavaScript', 'TypeScript', 'API Rest', 'MongoDB', 'ElectronJS'],
          url: 'https://github.com/CarlosHuit'
        },
      ]
    }

  }

  render() {


    return (
      <div className="Projects" id="projects" >
        <div className="Stack">


          <div className="Decoration">

            <Triangle direction="top"/>
            <Triangle direction="bottom"/>

          </div>


          <div className="Two-rows">

            <p className="Title"> Proyectos </p>

            <div className="Container-Projects">

              { this.state.projects.map( (e, i) => <Card data={e} key={i}/> ) }

            </div>

          </div>


        </div>
      </div>
    )

  }

}

export default Projects;