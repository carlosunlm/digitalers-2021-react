import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ArticulosComponent from "./ArticulosComponent";
import Navbar from "./NavbarComponent";
import NotFoundComponent from "./NotFoundComponent";
import { addAll } from '../../redux/actions/articulos/actions'
import DetallearticulosComponent from "./DetalleArticulosComponent";
import Carritocomponent from "./CarritoComponent";
import MensajeriaComponent from "./MensajeriaComponent";
import CheckoutComponent from "./CheckoutComponent";
import CheckoutSuccessComponent from "./CheckoutSuccessComponent";

export default function AppRouters() {

    
    const dispath = useDispatch();

    //para cargar datos en un componentes la primera vez
    //uso useEffect
    useEffect( () => {
        findArticulos();
    }, []);

    const findArticulos = async () => {
        //consulta a un api rest
        await fetch(`articulos.json`)
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
            <MensajeriaComponent/>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={ArticulosComponent}/>
                    <Route exact path="/articulo/detalle/:id" component={DetallearticulosComponent}/>
                    <Route exact path="/carrito" component={Carritocomponent}/>
                    <Route exact path="/checkout" component={CheckoutComponent}/>
                    <Route exact path="/checkout-success/:id" component={CheckoutSuccessComponent}/>
                    <Route path="*" component={NotFoundComponent}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}