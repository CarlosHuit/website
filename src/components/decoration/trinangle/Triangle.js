import React from 'react'
import './Triangle.css'

class Triangle extends React.Component {

  constructor(props) {
    super(props);

    const color = this.props.color ? this.props.color : '#B3E5FC';

    if (this.props.direction === 'bottom') {


      this.state = {
        styleRight: {
          left:     0,
          bottom:       0,
          position:    'absolute',
          borderWidth: `10vw 0px 0px 40vw`,
          borderColor: `transparent ${color} transparent ${color}`,
          borderStyle: 'solid',
        },
        styleLeft: {
          right:      0,
          bottom:       0,
          position:    'absolute',
          borderWidth: `12vw 80vw 0px 0px`,
          borderColor: `transparent ${color} transparent ${color}`,
          borderStyle: 'solid',
        }
      }

    }

    if (this.props.direction === 'top') {

      this.state = {
        styleRight: {
          left:     0,
          top:       0,
          position:    'absolute',
          borderWidth: `0px 0px 8vw 95vw`,
          borderColor: `transparent ${color} transparent ${color}`,
          borderStyle: 'solid',
        },
        styleLeft: {
          right:      0,
          top:       0,
          position:    'absolute',
          borderWidth: `0px 30vw 8vw 0`,
          borderColor: `transparent ${color} transparent ${color}`,
          borderStyle: 'solid',
        }
      }

    }

  }

  render() {

    return(

      <div>
        <div style={this.state.styleLeft}></div>
        <div style={this.state.styleRight}></div>
      </div>

    )

  }

}


export default Triangle