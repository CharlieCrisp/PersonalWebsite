import React, { Component, PropTypes } from 'react';

export default class Introduction extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange.bind(this));
  }

  handleWindowSizeChange() {
    console.log('triggered');
    this.setState({ width: window.innerWidth });
  };
  
  render() {
    return (
      
      <div className="introduction container">
      {this.state.width <= 700 ?
      <div style={{'flex-direction':'column'}}> 
        <img src='/me-normal.jpg' className='me-mobile'> </ img>
        <div className='intro-box'>
          <h1>I'm Charlie Crisp!</h1>
          I am a software engineer who graduated from Pembroke College, the University of Cambridge in June 2018.
        </div>
      </div>
      : 
      <div className='large-introduction container'> 
        <div className='intro-text'>
          <h1>I'm Charlie Crisp!</h1>
          I am a software engineer who graduated from Pembroke College, the University of Cambridge in June 2018.
        </div>
      </div>}
      </div>
        
    );
  }
}

Introduction.propTypes = {
  personalInfo: PropTypes.object.isRequired
};
