import React, { Component, PropTypes } from 'react';

export default class Introduction extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const requiredMargin = this.props.navbarHeight > 100 ? 50 : 0;

    return (
      <div className="introduction container">
      {this.props.width <= 770 ?
      <div style={{'flexDirection':'column'}}> 
        <img src='/me-normal.jpg' className='me-mobile' style={{marginTop:`${requiredMargin}px`}} /> 
        <div className='intro-box'>
          <h1>I'm Charlie Crisp!</h1>
          I am a software engineer who graduated with a 1st class degree in Computer Science from the University of Cambridge in June 2018.
          <br />
          <br />
          <b>Email: [firstname][lastname]249@gmail.com</b>
        </div>
      </div>
      : 
      <div className='large-introduction container'> 
        <div className='intro-text'>
          <h1>I'm Charlie Crisp!</h1>
          I am a software engineer who graduated with a 1st class degree in Computer Science from the University of Cambridge in June 2018.
          <br />
          <br />
          <b>Email: [firstname][lastname]249@gmail.com</b>
        </div>
      </div>}
      </div>
        
    );
  }
}

Introduction.propTypes = {
  personalInfo: PropTypes.object.isRequired
};
