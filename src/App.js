import './App.css';
import PlantTable from './components/PlantTable';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Garden Planner
        </p>
      </header>
      <PlantTable plants={[]} />
    </div>
  );
}

export default App;
