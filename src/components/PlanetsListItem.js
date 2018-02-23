import React from 'react';

export const PlanetsListItem = (props) => {
  const { planetClickHandler } = props;
  return (
    <li onClick={planetClickHandler} data-planet-name={props.name}>
      <div className="card">
        <div className="attribute"><span>Name: </span>{props.name}</div>
        <div className="attribute"><span>Diameter: </span>{props.diameter}</div>
        <div className="attribute"><span>Climate: </span>{props.climate}</div>
        <div className="attribute"><span>Gravity: </span>{props.gravity}</div>
        <div className="attribute"><span>Terrain: </span>{props.terrain}</div>
        <div className="attribute"><span>Population: </span>{props.population}</div>
      </div>
    </li>
  );
}

export default PlanetsListItem;