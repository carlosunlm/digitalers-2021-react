import { types } from "../../types/articulos/types";

export const articuloReducer = (state = {articulos:[]}, action) => {
    let res = {
        articulos: state.articulos || []
    }

    switch(action.type) {
        case types.ARTICULO_ADD:
            res.articulos = res.articulos.concat(action.payload);
            break;
        /*case types.ARTICULO_REMOVE:
            state.filter(x => x.id !== )
            newArts.concat(state);
            break;
        */
       default :
       res = state;
        break;
    }

    return res;
}

export default articuloReducer;