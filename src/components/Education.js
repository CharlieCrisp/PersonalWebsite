import React, { Component, PropTypes } from 'react';

export default class Education extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false
    }
  }

  render() {
    const { education } = this.props;
    const educationId = 'education-info-' + education.title.replace(/\s/g, '');
    const educationSeeMoreId = 'education-see-more-' + education.title.replace(/\s/g, '');

    let onExpandClick = () => {
      let body = document.getElementById(educationId);
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
          {(education.image != '') ?
          <div className="image-container" >
            <div className="screenshot-container">
              <img src={education.image} /> 
            </div>
          </div>
          : null}
          <div className="position-info-container">
            <div className="position-info-main">
            <div onClick={onExpandClick} style={{'cursor': 'pointer','display': 'flex', 'flexDirection': 'row', 'alignItems':'center'}}>
              <h3>
                {education.title}
              </h3>
              <i style={{'fontSize': '20px', 'marginLeft': 'auto'}} className={this.state.open ? "more-less glyphicon glyphicon-minus" : "more-less glyphicon glyphicon-plus"}> </i>
            </div>
              {education.company != ''
                ? <div> {education.company_url != '' 
                  ? <a href={education.company_url} target="_blank"> {education.company} </a> 
                  : education.company} 
                </div> 
                : null}
              <div>{education.date}</div>
            </div>
            <div className='position-info-body' id={educationId}>
              <h3>Description</h3>
              <div>{education.description}</div>
              {(education.links.length != 0) ? <div><h3>Links</h3>
              <ul>
              {Object.entries(education.links).map(([key,value]) => <li><a href={value}>{key}</a></li>)}</ul></div> : null}
            </div>
          </div>
        </div>
    );
  }
}

Education.propTypes = {
  education: PropTypes.object.isRequired
};
