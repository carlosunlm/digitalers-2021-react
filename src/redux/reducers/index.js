//tener mas de un estado dentro del store
import { combineReducers } from "redux";

import counterReducer from "./counter/reducer";
import userReducer from "./users/reducers";
import articuloReducer from "./articulos/articuloReducer";
import carritoReducer from "./carrito/reducer";
import mensajeReducer from "./mensaje/reducer";

export default combineReducers(
    {
        contador: counterReducer,
        users: userReducer,
        articulos: articuloReducer,
        carrito: carritoReducer,
        mensaje: mensajeReducer
    }
);