import React from 'react';

export const ActivePlanet = ({planet}) => {
  
  return (
    <div className="active-planet">
      {
        (planet.name)
        ? <div className="card">
            <div className="attribute"><span>Name: </span>{planet.name}</div>
            <div className="attribute"><span>Diameter: </span>{planet.diameter}</div>
            <div className="attribute"><span>Climate: </span>{planet.climate}</div>
            <div className="attribute"><span>Gravity: </span>{planet.gravity}</div>
            <div className="attribute"><span>Terrain: </span>{planet.terrain}</div>
            <div className="attribute"><span>Population: </span>{planet.population}</div>
          </div>
        : null
      }
    </div>
  );
}

export default ActivePlanet;