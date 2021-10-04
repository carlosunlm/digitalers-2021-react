import { Link } from "react-router-dom";

export default function ArticuloComponent(props) {

    const {articulo} = props;

    const submitHandler = () => {
        console.log('');    
    }

    return (
        <>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xxl-2">
                <div className="card h-100">
                    <img src="/assets/images/ceramica.jpg" className="card-img-top" alt="ceramica" />
                    <div className="card-body">
                        <h5 className="card-title">lg k50 2018</h5>
                        <p className="card-text">1000</p>
                        {/* <a href="/DetalleArticuloController?ID=9" className="btn btn-primary w-100">Ver</a> */}
                        <Link className="btn btn-primary w-100" to={`/articulo/detalle/${articulo.id}`}>Ver</Link>
                    </div>
                    <div className="card-footer">
                        <form id="form_9" className="row g-0 p-0" action="/CarritoController" method="post" onSubmit={()=> submitHandler}>
                            <input type="hidden" name="ID" value="9" />
                            <div className="col">
                                <label htmlFor="cantidad" className="visually-hidden">Cantidad</label>
                                <input type="number" min="0" max="999" name="CANTIDAD" className="form-control" id="CANTIDAD_9" placeholder="Cantidad" />
                            </div>
                            <div className="col-auto">
                                <button type="button" className="btn btn-primary mb-3 btnAdd" id="9">
                                    <i className="bi bi-cart-plus"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
