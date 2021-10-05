import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";

export default function CategoriesPage() {

    const location = useLocation();
    const history = useHistory();
    
    const queriesObj =new  URLSearchParams(location.search);

    const q = queriesObj.get('q') || 1;
    const t = queriesObj.get('t') || 10;

    //estados del componente
    const [username,setUsername] = useState('');
    const [genero,setGenero] = useState('');
    const [users,setUsers] = useState([]);

    const irAAbout = () => {
        if(username && genero) {
            //navegar a otro componente usando el router
            history.push(`/profile/${username}/${genero}`);
        }else {
            alert('Debe completar los datos');
        }
    }

    const paginar = () => {
        history.push({pathname: '/categories',search: '?q='+(parseInt(q)+1)});
    }

    //para cargar datos en un componentes la primera vez
    //uso useEffect
    useEffect( () => {
            console.log(users.length);            
            //consulta al api externo REST
            findUsers();
    }, [q]);

    const findUsers = async () => {
        const response = await fetch(`https://reqres.in/api/users?page=${q}`).then(data => data.json())
        setUsers(response.data);
    }

    return (
        <>
            <h1>q = {q}</h1>
            <h1>t = {t}</h1>

            <div>
                <p>Users:</p>
                <ul>
                {
                    users.map((user,index) => {
                        return <li key={index}>{user.email} </li>
                    })
                }
                </ul>
            </div>

            <button onClick={paginar}>
                Paginar
            </button>
            <hr/>

            username: <input 
                type="text" 
                value={username}
                onChange={ event => setUsername(event.target.value)}>
            </input>
            <br/>
            genero: <input 
                type="text" 
                value={genero}
                onChange={ event => setGenero(event.target.value)}>
            </input>
            <br/>
            <button onClick={irAAbout} disabled={!(username && genero)}>
                Ir a Profile
            </button>
        </>
    );
}