import React from 'react';
import PropTypes from 'prop-types';

function PlantTable({plants}) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
        </tr>
        { plants.map((plant, i) => (
          <tr key={i}>
            <td>{plant.name}</td>
          </tr>
          ))}
      </tbody>
    </table>
  );
}

PlantTable.propTypes = {
  plants: PropTypes.array
}

export default PlantTable;