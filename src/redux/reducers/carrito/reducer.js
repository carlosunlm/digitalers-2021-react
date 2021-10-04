import { types } from "../../types/carrito/types";
export const carritoReducer = (state = {items:[]}, action) => {
    let res = {
        items: state.items || []
    }

    switch(action.type) {
        case types.ARTICULO_ADD:
            res.items = res.items.concat(action.payload);
            break;
        case types.ARTICULO_REMOVE:{
            const itemsFiltrados = res.items.filter(item=> item.id !== action.payload.id);
            res.items = itemsFiltrados;
            break;
        }
        case types.ARTICULO_UPDATE:
            const itemsFiltrados = res.items.filter(item => item.id !== action.payload.id);
            res.items = itemsFiltrados;
            break;
       default :
        res = state;
        break;
    }

    return res;
}

export default carritoReducer;