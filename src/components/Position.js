import React, { Component, PropTypes } from 'react';
import TechStackItem from './positionComponents/TechStackItem';

export default class Position extends Component {
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
    const { position } = this.props;
    const techStackItems = position.tech_stack.map((tech, index) => {
      return <TechStackItem key={index} tech={tech}/>;
    });

    return (
      <div className="position-container">
        <div className="image-container" >
          <div className="screenshot-container">
            { this.state.width <= 500 ? <img src={position.mobile_image}/> : <img src={position.desktop_image}/>}
          </div>
        </div>
        <div className="position-info">
          <h2>{position.title}</h2>
          {position.company != ''
            ? <div> {position.company_url != '' 
              ? <a href={position.company_url} target="_blank"> {position.company} </a> 
              : position.company} 
            </div> 
            : null}
          <div>{position.date}</div>
          <h3>Background</h3>
          <div>{position.background}</div>
          <h3>Role</h3>
          <div>{position.role}</div>
          {(techStackItems.length != 0) ? <div><h3>Tech Stack</h3>
          <div className="tech-icon-container">{techStackItems}</div></div> : null}
          {(position.links.length != 0) ? <div><h3>Links</h3>
          <ul>
          {Object.entries(position.links).map(([key,value]) => <li><a href={value}>{key}</a></li>)}</ul></div> : null}
        </div>
      </div>
    );
  }
}

Position.propTypes = {
  position: PropTypes.object.isRequired
};
