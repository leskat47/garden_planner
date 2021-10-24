import React from 'react';
import PropTypes from 'prop-types';

function PlantTable({plants}) {
  return (
    <table>
      <tbody>
        <tr>
          <td>Table stub</td>
        </tr>
      </tbody>
    </table>
  );
}

PlantTable.propTypes = {
  plants: PropTypes.array
}

export default PlantTable;