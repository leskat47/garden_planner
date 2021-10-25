import ACTIONS from '../actions/actionTypes';
import { sampleData } from '../../sample_data';

// Using local data for now. 
// The initial data should be empty and populated when we connect to
// the backend API.
const initialState = sampleData;

function setAreas (state, action) {
  return action.data;
}
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_AREAS_SUCCESS:
      return setAreas(state, action);
    default:
      return state;
  }
};
