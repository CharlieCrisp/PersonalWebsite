import React, { Component } from 'react';
import RouteOverviewTile from '../components/RouteOverviewTile';
import routeColors from '../data/routeColors';

export default class RoutesOverview extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const routes = this.props.routes;
    const routeTiles = routes.map((route, index) => <RouteOverviewTile key={index} color={routeColors[(index % routeColors.length)]} route={route} />);

    return (
      <div className="routeTileHolder">
        {routeTiles}
      </div>
    )
  }
}
