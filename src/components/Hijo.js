
//el noombre de la funcion debe ser con la primer letra en Mayuscula
function Hijo(props) {

    //defino la varibale local a la funcion Hijo, pero toma el valor de las props enviadas desde el padre
    const miLsta = props.listaAlumnos;

    console.log(miLsta);

    return (
        <>
            <h1>Alumnos:</h1>
            {
                miLsta.map((alumno,index) => {
                    return <p> {index} - {alumno.id} - {alumno.nombre}</p>
                })
            }
            <hr/>
            <button onClick={ ()=> props.saludarAlumno('hola') }>
                Saludando desde Hijo                
            </button>
        </>
    );
}

export default Hijo;