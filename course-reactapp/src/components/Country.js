function Country({code,name,state,city}){

    return(
        <div>
            <h1>Código: {code}</h1>
            <h2>País: {name}</h2>
            <p>Provincia/Distrito: {state}</p>
            <p>Municipio: {city}</p>
        </div>
    );
}
export default Country;