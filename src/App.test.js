import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import reducer from './store/reducers/areas-reducer';
import App from './App';


test('renders learn react link', () => {
  const store = createStore(reducer, {
    areas: {
      areas: [
        {
        name: "Main Level",
        plants: [
          { name: 'Geranium', flowers: true, flower_color: 'red' }
        ]}
      ]
    }
  });
  render(<Provider store={store}><App /></Provider>);
  const linkElement = screen.getByText(/Garden Planner/i);
  expect(linkElement).toBeInTheDocument();
});
