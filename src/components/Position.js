import React, { Component, PropTypes } from 'react';
import TechStackItem from './positionComponents/TechStackItem';

export default class Position extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
    };
  }

  render() {
    const { position } = this.props;
    const positionId = 'position-info-' + position.title.replace(/\s/g, '');
    const positionSeeMoreId = 'position-see-more-' + position.title.replace(/\s/g, '');
    const techStackItems = position.tech_stack.map((tech, index) => {
      return <TechStackItem key={index} tech={tech}/>;
    });

    let onExpandClick = () => {
      let body = document.getElementById(positionId);
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
            <img src={position.image}/>
          </div>
        </div>
        <div className="position-info-container">
          <div className="position-info-main">
            <div onClick={onExpandClick} style={{'cursor': 'pointer','display': 'flex', 'flexDirection': 'row', 'alignItems':'center'}}>
              <h2>
                {position.title}
              </h2>
              <i style={{'fontSize': '20px', 'marginLeft': 'auto'}} className={this.state.open ? "more-less glyphicon glyphicon-minus" : "more-less glyphicon glyphicon-plus"}> </i>
            </div>
            {position.company != ''
              ? <div> {position.company_url != '' 
                ? <a href={position.company_url} target="_blank"> {position.company} </a> 
                : position.company} 
              </div> 
              : null}
            <div>{position.date}</div>
          </div>
          <div className='position-info-body' id={positionId}>
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
      </div>
    );
  }
}

Position.propTypes = {
  position: PropTypes.object.isRequired
};
