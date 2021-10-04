import { useSelector } from "react-redux"

export default function MensajeriaComponent(props) {

    /*const mensajeStore = useSelector(
        (state) => {state.mensaje}
    );
        */
    return (
    <>
        <div className="row mt-1">
            <div className="col-12">
                <div className="alert alert-danger" role="alert">
                    Mensaje
                </div>
            </div>
        </div>
    </>
    )
}
