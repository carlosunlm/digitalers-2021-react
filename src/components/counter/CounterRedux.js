import { useDispatch, useSelector } from "react-redux";
import { sumar,restar,reset } from "../../redux/actions/counter/actions";

export default function CounterRedux () {

    // const [counter,setCounter] = useState(0);
    const contadorStore = useSelector(
        (state) => state.counter
    );

    console.log(contadorStore);

    const dispatch = useDispatch();

    const incrementar = () => {
        dispatch(sumar);
    }

    const decremetar = () => {
        dispatch(restar);
    }

    const reiniciar = () => {
        dispatch(reset);
    }

    return (
        <>
            <h1>{contadorStore}</h1>
            <button onClick={ ()=> incrementar() }>
                +
            </button>
            <button onClick={() => decremetar()}>
                -
            </button>
            <button onClick={() => reiniciar()}>
                R
            </button>
        </>
    );
}