import React, { Component } from 'react';
import Position from '../components/Position';

export default class PositionsContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const positions = this.props.positions;
    const width = this.props.width;
    const positionEntries = positions.map((position, index) => <Position key={index} position={position} width={width}/> );

    return (
      <div className="selected-positions">
        <h1>Selected Positions</h1>
        {positionEntries}
      </div>
    )
  }
}
