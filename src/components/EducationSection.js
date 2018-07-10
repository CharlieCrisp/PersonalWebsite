import React, { Component } from 'react';

export default class EducationSection extends Component {
  render() {
    return(
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        {(this.props.links.length != 0) ? 
          <div>
            <h4>Links</h4>
            <ul>
              {Object.entries(this.props.links).map(([key,value]) => <li key={key}><a href={value}>{key}</a></li>)}
            </ul>
          </div> 
        : null}
        </div>
    )
  }
}