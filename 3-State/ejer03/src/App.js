
import './App.css';
import casas from './casas'

// import componentes

import Casa from './Casa';

function App() {
  return (
    <>
    {casas.map((datosCasa, index)=>{
      return <Casa key={index} datos={datosCasa}/>
    })}
    </>
  )
}

export default App
