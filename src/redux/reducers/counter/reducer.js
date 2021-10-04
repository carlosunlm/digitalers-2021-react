import { types } from "../../types/counter/types";

export const counterReducer = (state = {counter: 0}, action) => {
    let res = {
        counter: state.counter
    }

    switch(action.type) {
        case types.SUMAR: {
            res.counter += 1        
            break;
        }
        case types.RESTAR: {
            res.counter -= 1;
            break;    
        }
        case types.RESET:  {
            res.counter = 0
            break;
        }
        default:
            res.counter = state.counter
            break;
    }

    //sale objeto
    return res;
}


export default counterReducer;