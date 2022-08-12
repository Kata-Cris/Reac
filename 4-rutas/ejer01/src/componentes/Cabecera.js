import {Link} from 'react-router-dom'

function Cabecera(props) {

    return (
        <>
            <header>
                <h1> Hola Mundo</h1>
                <nav>
                    <Link to="/">Inicio</Link>
                    <Link to="/meses">Meses</Link>
                    <Link to="/dias">dias</Link>
                </nav>

            </header>
        </>

    );


}
export default Cabecera;