import React, { Component } from 'react';



class Animate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { afterAnimation: false }
  }
  render() {
    const afterAnimation = this.state.afterAnimation

    return (
      <button
        ref='button'
        onClick={() => this.setState({ afterAnimation: true })}
        onAnimationEnd={() => this.setState({ afterAnimation: false })}
        className={afterAnimation ? 'afterAnimation' : ''}>
        Click me!
      </button>
    )
  }
}

export default Animate;


