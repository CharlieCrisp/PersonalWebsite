import React, { Component, PropTypes } from 'react';
import TechStackItem from './positionComponents/TechStackItem';

export default class Project extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
    };
  }

  render() {
    const { project } = this.props;
    const projectId = 'position-info-' + project.title.replace(/\s/g, '');

    let onExpandClick = () => {
      let body = document.getElementById(projectId);
      switch (this.state.open) {
         case true:
           body.style.display = 'none';
           this.setState({
             open: false
           });
           return;
         case false:
           body.style.display = 'inline';
           this.setState({
             open: true
           });
           return;
       }
    };

    return (
      <div className="position-container">
        <div className="image-container" >
          <div className="screenshot-container">
            <img src={project.image}/>
          </div>
        </div>
        <div className="position-info-container">
          <div className="position-info-main">
            <div onClick={onExpandClick} style={{'cursor': 'pointer','display': 'flex', 'flexDirection': 'row', 'alignItems':'center'}}>
              <h2>{project.title}</h2>
              <i style={{'fontSize': '20px', 'marginLeft': 'auto'}} className={this.state.open ? "more-less glyphicon glyphicon-minus" : "more-less glyphicon glyphicon-plus"}> </i>
            </div>
            <div>{project.date}</div>
            <a href={project.url}><i className="more-less glyphicon glyphicon-link"></i> Webpage</a>
            <div>{project.short_description}</div>
          </div>
          <div className='position-info-body' id={projectId}>
            <h3>Background</h3>
            <div>{project.long_description}</div>
            {(project.links.length != 0) ? <div><h3>Links</h3>
            <ul>
            {Object.entries(project.links).map(([key,value]) => <li><a href={value}>{key}</a></li>)}</ul></div> : null}
          </div>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object.isRequired
};
