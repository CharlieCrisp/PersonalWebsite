import React, { Component } from 'react';

let hoverTransparency = 0.75;
let normTransparency = 0.55;
let normGradient = 0.45;

export default class RouteOverviewTile extends Component {
  constructor(props, context) {
    super(props, context);
    const route = this.props.route;
    const id = route.name.replace(/\s/g, '');
    this.state = {
      id: id,
    };
  }

  mouseOver() {
    let currentElement = document.getElementById(this.state.id);
    const color = this.props.color;
    const route = this.props.route;
    var bgString = `
      linear-gradient(-45deg,
        rgba(${color[0]},${color[1]},${color[2]},${hoverTransparency}), 
        rgba(${color[0]},${color[1]},${color[2]},${hoverTransparency})
      ),
      url(${route.image}) no-repeat center`;
    currentElement.style.background = bgString;
    currentElement.style.backgroundSize = "contain";
  }

  mouseOut() {
    let currentElement = document.getElementById(this.state.id);
    const color = this.props.color;
    const route = this.props.route;
    var bgString = `
      linear-gradient(-45deg,
        rgba(${color[0]},${color[1]},${color[2]},${normTransparency + normGradient}), 
        rgba(${color[0]},${color[1]},${color[2]},${normTransparency})
      ),
      url(${route.image}) no-repeat center`;
    currentElement.style.background = bgString;
    currentElement.style.backgroundSize = "contain";
  }

  render() {
    const route = this.props.route;
    const color = this.props.color;
    var bgString = `
      linear-gradient(-45deg,
        rgba(${color[0]},${color[1]},${color[2]},${normTransparency + normGradient}), 
        rgba(${color[0]},${color[1]},${color[2]},${normTransparency})
      ),
      url(${route.image}) no-repeat center`;

    return (
      <div id={this.state.id} className="routeTile" style={{background: bgString, backgroundSize: "contain"}} 
        onMouseOver={()=>this.mouseOver()} onMouseOut={()=>this.mouseOut()} onClick={()=>window.location=route.url} >
        <h1 style={{fontSize: "50px", wordWrap:"break-word"}}>{route.name}</h1>
      </div>
    );
  }
}
