import { useState } from "react";
import { useParams } from "react-router"

export default function ProfilePage (props) {

    //const params = useParams();
    //const username = params.username;
    //const genero = prams.genero;
    
    //datos del pathParams
    const { username, genero} = useParams();
    
    //estado  del componente
    const [ apellido, setApellido] = useState('lopez');

    return (
        <>
            <h1>Profile Page: Nombre: {username} </h1>
            <h1>Profile Page: Género: {genero} </h1>
            <h1>{apellido}</h1>
        </>
    )
}