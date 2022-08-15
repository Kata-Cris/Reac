import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Saludar from './components/Saludar';

function App() {
  let [input, setInput] = useState("")

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={
          <>

            <input value={input} type="text" onChange={e => setInput(e.target.value)} />
            <Link to={"/saludar/" + input}><button>Saludar</button></Link></>} />

        <Route path="/Saludar/:nombre" element={<Saludar />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App
