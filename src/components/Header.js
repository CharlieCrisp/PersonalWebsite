import React, { Component } from 'react';

export default class Header extends Component {
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
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { personalInfo, routes } = this.props;
    const routeElements = routes.map((route, index) => 
      <li key={index} className="nav-item">
        {<a className="nav-link" href={route.url} style={{ lineHeight: 'normal' }}>{route.name}</a> }
      </li> );

    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark header" >
        <a className="navbar-brand" href="/">Home</a>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav">
            {routeElements}
            <li>
              <a href={personalInfo.resume} className="nav-link" target="_blank" style={{ lineHeight: 'normal' }}>
                <span>CV</span>
              </a>
            </li>
            <li>
              <a href={personalInfo.github} className="nav-link" target="_blank">
                <i className="fa fa-github icon"></i>
              </a>
            </li>
            <li>
              <a href={personalInfo.linkedIn} className="nav-link" target="_blank">
                <i className="fa fa-linkedin-square icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
