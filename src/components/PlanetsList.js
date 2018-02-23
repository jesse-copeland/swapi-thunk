import React from 'react';

import PlanetsListItem from './PlanetsListItem';

const PlanetsList = ({ planets, planetClickHandler }) => {
  console.log('clickhandler', planetClickHandler)
  const planetsListContent = planets.map((planet, idx) => {
    return <PlanetsListItem key={idx} {...planet} planetClickHandler={planetClickHandler}/>
  });

  return (
    <ul className="planets-list" >
      {planetsListContent}
    </ul>
  );
}

export default PlanetsList