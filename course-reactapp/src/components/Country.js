function Country({code,name,state,city}){
    return(
        <div>
        <h3>Código: {code}</h3>
        <h3>País: {name}</h3>
        <p>Provincia/Distrito: {state}</p>
        <p>Municipio: {city}</p>
        </div>
    );
}
export default Country;