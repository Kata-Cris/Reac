
import './App.css';

import videoclub from './datos/videoclub'

// Components Import

import Cabecera from './Cabecera'
import Footer from './Footer'
import Main from './Main';

function App() {
  return (
    <>
      <Cabecera />
      <Main peliculas={videoclub}/>
      <Footer />

    </>
  );
}

export default App;