import { useDispatch, useSelector } from "react-redux"
import { MSJ_REMOVE } from "../../redux/actions/mensaje/actions";

export default function MensajeriaComponent() {

    const mensajeReducer = useSelector(
        (state) => state.mensaje
    )

    const dispath = useDispatch();

    const limpiar = () => {
        dispath(MSJ_REMOVE)
    }
    
    return (

        (
            mensajeReducer.mensaje 
            ? 
            <div className="container mt-1">
                <div className="row">
                    <div className="alert alert-info alert-dismissible fade show" role="alert">
                        <strong>
                            {mensajeReducer.mensaje}
                        </strong>
                        <button type="button" 
                            className="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close" 
                            onClick={()=>limpiar()}>
                        </button>
                    </div>
                </div>
            </div>
            : 
            <></>
        )
    )
}
