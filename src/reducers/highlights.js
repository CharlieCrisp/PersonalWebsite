import { highlightsData } from '../data/highlights';

export default function highlights(state = highlightsData.data, action) {
  switch (action.type) {
    default:
      return state;
  }
}
