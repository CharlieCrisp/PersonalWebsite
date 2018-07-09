import React, { Component } from 'react';
import Education from '../components/Education';

export default class EducationContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const education = this.props.education;
    const width = this.props.width;
    const educationEntries = education.map((education, index) => <Education key={index} education={education} width={width} />);

    return (
      <div>
        <h1>Education</h1>
        {educationEntries}
      </div>
    )
  }
}
