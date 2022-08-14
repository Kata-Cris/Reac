function Lista(props) {
    return ( 
    <ul>
        {props.Lista.map((compositor, index) => 
        <li key={index}>{compositor.nombre}</li>)}
      </ul> );
}

export default Lista