import React from 'react'
import './Card.css'

class Card extends React.Component {

  data;

  constructor(props) {
    super(props);
    this.data = props.data;
  }


  render() {

    return (

      <div className="Card">

        <div className="Project-title">
          { this.data.name }
        </div>
        <div className="Project-desc">
          { this.data.desc }
        </div>
        <div className="Project-type">
          {
            this.data.type.map((e, i) => {
              return (
                <span className="Type" key={i}>{e}</span>
              )
            })
          }
        </div>
        <div className="Project-tags">
          {
            this.data.tags.map((t, i) => {
              return <span className="Tag" key={i} >{t}</span>
            })
          }
        </div>

        <div className="Project-links">
          <a href={this.url}>Ver Codigo</a>


        </div>

        {
          this.data.app && <div className="Project-app-link">
            <a href={this.data.app}>Ir a la aplicacion</a>
          </div>
        }

      </div>

    )

  }


}

export default Card