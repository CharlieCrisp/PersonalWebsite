import React, { Component } from 'react';
import EducationSection from '../components/EducationSection';

export default class EducationContainer extends Component {

  render() {
    const education = this.props.education;
    const sections = education.map((section, index) => <EducationSection key={index} title={section.title} description={section.description} links={section.links}/> );
    
    return (
      <div>
        <h1>Education</h1>
        <div className="position-container">
          <div className="image-container" >
            <div className="screenshot-container">
              <img src="cambridgebanner.png" /> 
            </div>
          </div>
          <div className="position-info-container">
            <div className="position-info-main">
              <h2>B.A. Computer Science - 1st Class Honours</h2>
            </div>
            <div>  
              <a href="https://cl.cam.ac.uk" target="_blank">University of Cambridge</a> 
            </div> 
            <div>2015-2018</div>
            <div>
              {sections}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
