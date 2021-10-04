import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ArticulosComponent from "./Articulos";
import Navbar from "./Navbar";
import NotFoundComponent from "./NotFoundPage";
import { addAll } from '../../redux/actions/articulos/actions'
import DetallearticulosComponent from "./DetalleArticulos";
import Carritocomponent from "./CarritoComponent";

export default function AppRouters() {

    const dispath = useDispatch();

    //para cargar datos en un componentes la primera vez
    //uso useEffect
    useEffect( () => {
        findArticulos();
    }, []);

    const findArticulos = async () => {
        await fetch(`http://localhost:3000/articulos.json`)
        .then(
            (response) => response.json()
        ).then((data) => {
            const newAdd = addAll;
            newAdd.payload = data
            dispath(addAll)
        });
    }
    
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={ArticulosComponent}/>
                    <Route exact path="/articulo/detalle/:id" component={DetallearticulosComponent}/>
                    <Route exact path="/carrito" component={Carritocomponent}/>
                    <Route path="*" component={NotFoundComponent}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}