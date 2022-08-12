import { userState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import videoclub from './datos/catalogo'
import './App.css'
import Catalogo from './componentes/Catalogo'
import Pelicula from './componentes/Pelicula'

function App() {
  const [catalogo] = userState(videoclub)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Catalogo catalogo={catalogo} />} />
        {catalogo.map((pelicula, indes) => {
          return <Route 
          path={"/" + pelicula.titulo.replaceAll(" ", "-")} 
          element={<Pelicula full={true} sinopsis= {pelicula.sinopsis} cartel={pelicula.cartel} titulo={pelicula.titulo} />} />
      })}
      </Routes>
    </BrowserRouter>

  )
}

export default App
