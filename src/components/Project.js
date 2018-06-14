import React, { Component, PropTypes } from 'react';
import Mobile from './projectComponents/Mobile.js';
import TechStackItem from './projectComponents/TechStackItem';

export default class Project extends Component {
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
    const { project } = this.props;
    const techStackItems = project.tech_stack.map((tech, index) => {
      return <TechStackItem key={index} tech={tech}/>;
    });

    return (
      <div className="project-container">
        <div className="image-container" >
          <div className="screenshot-container">
            { this.state.width <= 500 ? <img src={project.mobile_image}/> : <img src={project.desktop_image}/>}
          </div>
        </div>
        <div className="project-info">
          <a href={project.project_url} target="_blank">
            <h2>{project.title}</h2>
          </a>
          <a href={project.github_url} target="_blank">
            {project.github_url !== '' ? 'Github' : null}
          </a>
          <div>{project.date}</div>
          <h3>Background</h3>
          <div>{project.background}</div>
          <h3>Role</h3>
          <div>{project.role}</div>
          <h3>Tech Stack</h3>
          <div className="tech-icon-container">{techStackItems}</div>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object.isRequired
};
