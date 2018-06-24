import React, { Component, PropTypes } from 'react';

export default class Highlight extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false
    }
  }

  render() {
    const { highlight } = this.props;
    const highlightId = 'highlight-info-' + highlight.title.replace(/\s/g, '');
    const highlightSeeMoreId = 'highlight-see-more-' + highlight.title.replace(/\s/g, '');

    let onExpandClick = () => {
      let body = document.getElementById(highlightId);
      let toggle = document.getElementById(highlightSeeMoreId);
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
          {(highlight.image != '') ?
          <div className="image-container" >
            <div className="highlight-image-container" style={{'display':'flex', 'justifyContent':'center'}}>
              <img src={highlight.image} style={{'maxHeight': '150px', 'marginTop':'20px' }}/> 
            </div>
          </div>
          : null}
          <div className="position-info-container">
            <div className="position-info-main">
            <div onClick={onExpandClick} style={{'cursor': 'pointer','display': 'flex', 'flexDirection': 'row', 'alignItems':'center'}}>
              <h3>
                {highlight.title}
              </h3>
              <i style={{'fontSize': '20px', 'marginLeft': 'auto'}} className={this.state.open ? "more-less glyphicon glyphicon-minus" : "more-less glyphicon glyphicon-plus"}> </i>
            </div>
              {highlight.company != ''
                ? <div> {highlight.company_url != '' 
                  ? <a href={highlight.company_url} target="_blank"> {highlight.company} </a> 
                  : highlight.company} 
                </div> 
                : null}
              <div>{highlight.date}</div>
            </div>
            <div className='position-info-body' id={highlightId}>
              <h3>Description</h3>
              <div>{highlight.description}</div>
              {(highlight.links.length != 0) ? <div><h3>Links</h3>
              <ul>
              {Object.entries(highlight.links).map(([key,value]) => <li><a href={value}>{key}</a></li>)}</ul></div> : null}
            </div>
          </div>
        </div>
    );
  }
}

Highlight.propTypes = {
  highlight: PropTypes.object.isRequired
};
