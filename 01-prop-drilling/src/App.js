import "./App.css";
import Grandparent from "./components/01-Grandparent/Grandparent";

function App() {
  return (
    <div className="App">
      <h1>Prop Drilling</h1>
      <Grandparent />
    </div>
  );
}

export default App;
