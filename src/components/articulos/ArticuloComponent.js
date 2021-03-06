import { Link } from "react-router-dom";
import { ArticuloAdd } from "./ArticuloAdd";

export default function ArticuloComponent(props) {

    const {articulo} = props;

    return (
        <>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xxl-2">
                <div className="card h-100">
                    <img src="/assets/images/ceramica.jpg" className="card-img-top" alt="ceramica" />
                    <div className="card-body">
                        <h5 className="card-title">{articulo.titulo}</h5>
                        <p className="card-text">{articulo.precio}</p>
                        <Link className="btn btn-info w-100" to={`/articulo/detalle/${articulo.id}`}>Ver</Link>
                    </div>
                    <div className="card-footer">
                        <ArticuloAdd articulo={articulo}></ArticuloAdd>
                    </div>
                </div>
            </div>
        </>
    )
}
