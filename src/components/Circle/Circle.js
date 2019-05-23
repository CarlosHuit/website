import React from 'react';
import './Circle.css'

class Circle extends React.Component {

  
  generateStyles(props) {
    return {
      left: `${this.props.position.x}`,
      top: `${this.props.position.y}`,
      width: `${this.props.position.size}px`,
      height: `${this.props.position.size}px`,
      borderWidth: `${this.props.position.size * 0.30}px`,
      borderColor: this.props.position.color !== undefined ? this.props.position.color : '#00bcd4'
    }
  }

  render() {
    return (
      <div
        className='Circle'
        style={this.generateStyles(this.props)}
        >
      </div>
    )
  }
  
}


export default Circle;