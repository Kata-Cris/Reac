import {useParams} from 'react-router-dom'

function Saludar (){
    let parametros = useParams()
    return (<h1>hola {parametros.nombre}</h1>);
}
export default Saludar;<h1>hola</h1>