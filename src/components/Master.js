import { useState } from "react";

import Hijo from "./Hijo";

function Master() {
    const [alumnos, setAlumnos] = useState([]);
    const [nombre, setNombre] = useState('carlos');
    const [id, setId] = useState(0);

    const add = () => {
        const unAlumno = {
            id: id,
            nombre: nombre
        };    
        debugger;
        let nuevosALumnos = [];
        nuevosALumnos.push(unAlumno);
        nuevosALumnos = nuevosALumnos.concat(alumnos);
        setAlumnos(nuevosALumnos);
    }

    const remove = (alumno) => {
    }    
    const edit = (alumno) => {    
    }

    return(
        <>
            
            <input 
                type="text" 
                value={nombre}
                onChange={ event => setNombre(event.target.value)}
                ></input>

            <input 
                type="number" 
                value={id}
                onChange={event => setId(event.target.value)}
                ></input>

            <Hijo 
                listaAlumnos={alumnos} 
            >
            </Hijo>
            <hr/>
            <button onClick={() => add()}>
                Agregar Alumno
            </button>
        </>
    );
}
export default Master;
