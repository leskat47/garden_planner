import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getAreas from './store/selectors/areas-selector';

import './App.css';
import Areas from './components/Areas';

function App({areas}) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Garden Planner
        </p>
      </header>
      <Areas areas={areas} />
    </div>
  );
}

App.propTypes = {
  areas: PropTypes.array
}

function mapStateToProps(state) {
  return {
    areas: getAreas(state)
  }
}

export default connect(mapStateToProps)(App);
