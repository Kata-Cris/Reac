
import './App.css'
import { useState } from 'react'
import { BrouserRouter, Route, Routes } from "react-router-dom"
import videojuegos from './datos/videojuegos'

//import components

import Videojuego from './components/Videojuego'

function App() {
  const [catalogo] = useState(videojuegos)
  return (
    <BrouserRouter>
      <Routes>
        <Route 
          path='/' 
          element={catalogo.map((videojuegos, index) => {
            return <Videojuego full={false} videojuego={videojuego} key={index} />
        })}
        />
        {catalogo.map((videojuego, index) => {
          return <Route path={"/videojuegos/" + videojuego.titulo.replaceAll(" ", "-")} element={<Videojuego full={true} videojuego={videojuego} key={index}/>} />

        })}
    </Routes>

    </BrouserRouter>
  )
}

export default App
