import { LOAD_PLANETS, SET_ACTIVE_PLANET } from '../actions';

const initialState = {
  planets: [],
  activePlanet: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PLANETS:
      return { ...state, planets: action.planets }
    case SET_ACTIVE_PLANET:
      return { ...state, activePlanet: { ...action.planet }}
    default:
      return state;
  }
}