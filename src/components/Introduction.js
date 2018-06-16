import React, { Component, PropTypes } from 'react';

export default class Introduction extends Component {
  render() {
    const { personalInfo } = this.props;
    return (
      <div className="introduction container">
        <div> 
          <img className='intro-image' src={'/me.jpg'} />  
        </div>
        <div className='intro-box'>
          <h1>I'm Charlie Crisp!</h1>
          I am a software engineer who graduated from Pembroke College, the University of Cambridge in June 2018.
        </div>
      </div>
    );
  }
}

Introduction.propTypes = {
  personalInfo: PropTypes.object.isRequired
};
