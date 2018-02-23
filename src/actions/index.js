import 'whatwg-fetch';

const SWAPI_STUB = 'https://swapi.co/api';

export const LOAD_PLANETS = 'LOAD_PLANETS';
export const SET_ACTIVE_PLANET = 'SET_ACTIVE_PLANET';

export const setActivePlanet = planet => {
  if (planet) {
    return {
      type: SET_ACTIVE_PLANET,
      planet
    }
  }
}

export const loadPlanets = () => {
  return dispatch => {
    return fetch(`${SWAPI_STUB}/planets`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json.results
      })
      .then(planets => {
        dispatch({
          type: LOAD_PLANETS,
          planets
        });
        dispatch(setActivePlanet(planets[0]))
      })
      .catch(err => {
        console.log(err);
        return dispatch({
          type: LOAD_PLANETS,
          planets: []
        });
      });
  }
}
