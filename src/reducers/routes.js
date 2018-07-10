import { routesData } from '../data/routes';

export default function routes(state = routesData.data, action) {
  switch (action.type) {
    default:
      return state;
  }
}
