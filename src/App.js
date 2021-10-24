import React from 'react';
import './App.css';
import Areas from './components/Areas';
import { sampleData } from './sample_data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Garden Planner
        </p>
      </header>
      <Areas areas={sampleData.areas} />
    </div>
  );
}

export default App;
