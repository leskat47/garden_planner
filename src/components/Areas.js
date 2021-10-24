import React from 'react';
import PropTypes from 'prop-types';
import PlantTable from './PlantTable';

function Areas({areas}) {
  return (
    <div>
      { areas.map((area, i) => (
          <div key={i}>
            <h2>{area.name}</h2>
            <PlantTable plants={area.plants} />
          </div>
      ))}
    </div>
    );
}

Areas.propTypes = {
  areas: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    plants: PropTypes.array
  }))
};

export default Areas;