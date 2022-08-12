import{Link} from 'react-router-dom'

function Videojuego({ videojuego, full }) {
    if (!full) {
        return (
            <div>
                <Link to={"/" + videojuego.titulo.replaceAll(" ", "-")}></Link><h1>{videojuego.titulo}</h1>
            </div>
        )
    } else {
        return (
            <div className="card">
                <h2>{videojuego.titulo}</h2>
                <p>Año: {videojuego.anyo}</p>
                <p>Plataforma: {videojuego.plataforma}</p>
                <p>Creador: {videojuego.creador}</p>
                <p>Genero {videojuego.genero}</p>
                <p>{videojuego.sinopsis}</p>
                <Link to="/">Inicio</Link>
            </div>
        );
    }
}

export default Videojuego