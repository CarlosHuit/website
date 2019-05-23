import React from 'react';
import './Projects.css'
import Triangle from '../decoration/trinangle/Triangle';

class Projects extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      projects: [
        {
          name: 'Weduc',
          desc: 'Aplicacion web que intenta optimizar elproceso de aprendizaje en los campos de lectura haciendo uso de reconocomiento de voz y lectura utilizando el reconociento de patrones y tts.',
          type: ['Pwa', 'Web', 'Spa'],
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
          type: ['Server', 'API Rest', 'Mvc'],
          tags: ['ExpressJS', 'NestJS', 'JavaScript', 'TypeScript', 'MongoDB', 'MySQL', 'FastifyJS'],
          url: 'https://github.com/CarlosHuit'
        },
        {
          name: 'Personal Web Site',
          desc: 'Sitio web personal.',
          type: ['Pwa', 'Web', 'Spa'],
          tags: ['ReactJS', 'CSS', 'HTML', 'TypeScript', 'JavaScript'],
          url: 'https://github.com/CarlosHuit'
        },
        {
          name: 'Sales Point',
          desc: 'Aplicacion web para gestionar existencias de inventario, ventas, devoluciones y compras de un punto de ventas o almacen.',
          type: ['Pwa', 'Web', 'Spa', 'Desktop'],
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

            <p className="Title">
              Proyectos
            </p>

            <div className="Container-Projects">

              {
                this.state.projects.map((e, i) => {

                  return (
                    <div className="Card">

                      <div className="Project-title">
                        { e.name }
                      </div>
                      <div className="Project-desc">
                        { e.desc }
                      </div>
                      <div className="Project-type">
                        {
                          e.type.map((e, i) => {
                            return (
                              <span className="Type" key={i}>{e}</span>
                            )
                          })
                        }
                      </div>
                      <div className="Project-tags">
                        {
                          e.tags.map((t, i) => {
                            return <span className="Tag" key={i} >{t}</span>
                          })
                        }
                      </div>

                      <div className="Project-links">
                        <a href={e.url}>Ver Codigo</a>


                      </div>

                      {
                        e.app && <div className="Project-app-link">
                          <a href={e.app}>Ir a la aplicacion</a>
                        </div>
                      }



                    </div>
                  )

                })
              }


            </div>

          </div>


        </div>
      </div>
    )

  }

}

export default Projects;