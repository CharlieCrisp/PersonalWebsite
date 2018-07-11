import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BenchmarkActions from '../actions/BenchmarkActions';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Introduction from '../components/Introduction';
import { startTime } from '../index';
import { Route } from 'react-router-dom';
import PositionsContainer from './PositionsContainer';
import EducationContainer from './EducationContainer';
import RoutesOverview from './RoutesOverview';
import ProjectsContainer from './ProjectsContainer';

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
export class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      width: window.innerWidth,
      navbarHeight:0
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange.bind(this));
  }

  handleWindowSizeChange() {
    let element = document.getElementById("myNavbar");
    console.log("navbar height: " + element.clientHeight);
    this.setState({ width: window.innerWidth, navbarHeight: element.clientHeight });
    let top = document.getElementById("top-item");
    if (element.clientHeight > 100) {
      top.style.marginTop = "50px";
    } else {
      top.style.marginTop = "0px";
    }
  };

  componentDidMount() {
    let element = document.getElementById("myNavbar");
    this.setState({navbarHeight: element.clientHeight});
    const { actions } = this.props;
    actions.updateBenchmark(new Date().getTime() - startTime);
    let top = document.getElementById("top-item");
    if (element.clientHeight > 100) {
      top.style.marginTop = "50px";
    } else {
      top.style.marginTop = "0px";
    }
  }

  render() {
    const { positions, personalInfo, education, routes, projects } = this.props;
    
    // we can use ES6's object destructuring to effectively 'unpack' our props
    return (
      <div className="main-app-container">
        <Header personalInfo={personalInfo} routes={routes} />
        <div id="top-item"></div>
        <Route exact path='/' render={() => <Introduction personalInfo={personalInfo} width={this.state.width} />}/>
        <Route exact path='/' render={() => <RoutesOverview routes={routes}/>} />
        <Route path='/positions' render={() => <PositionsContainer positions={positions} width={this.state.width}/>} />
        <Route path='/projects' render={() => <ProjectsContainer projects={projects} />} />
        <Route path='/education' render={() => <EducationContainer education={education}/>} />
        <Footer personalInfo={personalInfo} />
      </div>
    );
  }
}

App.propTypes = {
  positions: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  benchmark: PropTypes.number.isRequired,
  personalInfo: PropTypes.object.isRequired,
  education: PropTypes.array.isRequired,
  routes: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired
};

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
  return {
    positions: state.positions,
    benchmark: state.benchmark,
    personalInfo: state.personalInfo,
    education: state.education,
    routes: state.routes,
    projects: state.projects
  };
}

/**
 * Turns an object whose values are 'action creators' into an object with the same
 * keys but with every action creator wrapped into a 'dispatch' call that we can invoke
 * directly later on. Here we imported the actions specified in 'CounterActions.js' and
 * used the bindActionCreators function Redux provides us.
 *
 * More info: http://redux.js.org/docs/api/bindActionCreators.html
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BenchmarkActions, dispatch)
  };
}

/**
 * 'connect' is provided to us by the bindings offered by 'react-redux'. It simply
 * connects a React component to a Redux store. It never modifies the component class
 * that is passed into it, it actually returns a new connected componet class for use.
 *
 * More info: https://github.com/rackt/react-redux
 */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
