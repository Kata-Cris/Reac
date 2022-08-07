
import './App.css';
import persona from './persona'

function App() {
  return (
     <>
    <h1>{persona.nombre}</h1>
    <div>
      <p> Edad: {persona.edad}</p>
      <p> nacimiento: {persona.nacimiento}</p>
      <div>
        direccion:
      <p> calle: {persona.direccion.calle}, {persona.direccion.numero} </p>
      <p>
      {persona.direccion.piso}, {persona.direccion.cp}, {persona.direccion.ciudad}
      </p>
      </div>
    </div>
    </>
  );
}

export default App;
