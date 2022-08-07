
import './App.css';

import biblioteca from './service/biblioteca'

//Import Componentes
import Cabecera from './components/Cabecera'
import Libro from './components/libro'


function App() {
  return (
    <>
    <Cabecera biblioteca={biblioteca}/>
    <main className="catalogo">

    {biblioteca.libros.map((Librito, index)=>{
      return <Libro libros={Librito}/>
    })}
    </main>
    </>
  )

    
    
 
  
}

export default App
