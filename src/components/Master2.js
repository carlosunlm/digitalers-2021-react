import React from "react";

class Master2 extends React.Component {

    constructor() {
        super();

        this.state = {
            alumnos:[],
            nombres:'',
            id:0
        };

        this.add = () => {

        }

        this.remove = () => {

        }

        this.edit = () => {

        }
    }

    render() {
        return <>
            
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
    };
}

export default Master2;