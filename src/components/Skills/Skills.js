import React from 'react';
import Circle from '../Circle/Circle';
import './Skills.css';

class Skills extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      position: { x: '80%', y: '80%', size: 60 },
      position1: { x: '10%', y: '15%', size: 72, },
      position2: { x: '60%', y: '10%', size: 36, },
      position3: { x: '32%', y: '81%', size: 36, },
      position4: { x: '85%', y: '5%', size: 36, },
    }
  }

  skills = [
    'Front-end',
    'Back-end',
    'API Rest',
    'Mobile Apps',
    'Desktop Apps',
    'Full Stack JavaScript',
    'TypeScript',
    'Flutter',
    'NativeScript',
    'Dart',
    'Python',
    'Django',
    'Flask',
    'Angular',
    'ReactJS',
    'VueJS',
    'ExpressJS',
    'NestJS',
    'ReactNative',
    'NextJS',
    'PWA',
    'MPA',
    'CSS',
    'HTML',
    'Stylus',
    'Java',
    'MongoDB',
    'FireBase',
    'Redis',
    'MySQL',
    'PostgreSQL',
    'Web Desing',
    'ElectronJS',
    'Angel Dart',
    'GraphQL',
  ]

  skillList = this.skills.map((e, i) => <div key={i}> {e} </div>)

  render() {
    return (
      <div className="Skills" id='skills'>
        <div className="Stack">



          <div className="Decoration">
            <Circle position={this.state.position} />
            <Circle position={this.state.position1} />
            <Circle position={this.state.position2} />
            <Circle position={this.state.position4} />
          </div>


          <div className="Container-Skills">

            <div className="Title">
              Skills
            </div>

            <div className="Skill-group">
              { this.skillList }
            </div>

          </div>



        </div>
      </div>
    );

  }

}

export default Skills