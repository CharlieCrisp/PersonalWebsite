import React, { Component } from 'react';
import Project from '../components/Project';

export default class ProjectsContainer extends Component {

  render() {
    const projects = this.props.projects;
    const projectEntries = projects.map((project, index) => <Project key={index} project={project}/> );
    
    return (
      <div>
        <h1>Projects</h1>
        {projectEntries}
      </div>
    )
  }
}
