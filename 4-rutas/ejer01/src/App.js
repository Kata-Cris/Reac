
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cabecera from './componentes/Cabecera';
import Meses from './componentes/Meses';
import Dias from './componentes/Dias';


function App() {
  return (
    <BrowserRouter>
      <Cabecera />
      <Routes>
        <Route path='/' />
        <Route path='/meses' element={<Meses />} />
        <Route path='/dias' element={<Dias />} />


      </Routes>

    </BrowserRouter>

  );
}

export default App;
