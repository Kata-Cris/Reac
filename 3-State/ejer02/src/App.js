
import './App.css';

function App() {
  let array = ["Charmander", "Squirtle", "Bulbasur"]
  return (
    <ul>
      {array.map((pokemon)=><li>{pokemon}</li>)}
    </ul>
    
  );
}

export default App;
