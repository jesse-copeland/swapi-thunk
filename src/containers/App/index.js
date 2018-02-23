import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../../logo.svg';
import './App.css';

import { loadPlanets, setActivePlanet } from '../../actions';
import ActivePlanet from '../../components/ActivePlanet';
import PlanetsList from '../../components/PlanetsList';

class App extends Component {
  constructor(props) {
    super(props)

    this.planetClickHandler = this.planetClickHandler.bind(this);
    this.findPlanetByName = this.findPlanetByName.bind(this);
  }
  componentDidMount() {
    this.props.loadPlanets();
  }

  planetClickHandler(event) {
    const planetName = event.currentTarget.dataset.planetName;
    if (planetName) {
      const foundPlanet = this.findPlanetByName(planetName);
      if (foundPlanet) {
        this.props.setActivePlanet(foundPlanet);
      }
    }
  }

  findPlanetByName(name) {
    const foundPlanet = this.props.planets.find(planet => {
      return planet.name === name;
    });
    if (foundPlanet) {
      return foundPlanet;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ActivePlanet planet={this.props.activePlanet} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PlanetsList planets={this.props.planets} planetClickHandler={this.planetClickHandler}/>
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    planets: state.planets.planets,
    activePlanet: state.planets.activePlanet
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadPlanets: () => {
      dispatch(loadPlanets());
    },
    setActivePlanet: planet => {
      dispatch(setActivePlanet(planet));
    }
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(App);
