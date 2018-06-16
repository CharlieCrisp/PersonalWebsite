import { positionsData } from '../data/positions';

export default function positions(state = positionsData.data, action) {
  switch (action.type) {
    default:
      return state;
  }
}
