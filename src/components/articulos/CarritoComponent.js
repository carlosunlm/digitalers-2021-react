import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Carritocomponent(props) {
    const carritoReducer = useSelector(
        (state) => state.carrito
    )

    const carritoVacio = () => {
        return (
            <div className="row mt-5">
                <div className="col-12">
                    <div className="alert alert-warning" role="alert">
                        <h4 className="alert-heading">Carrito Vacío!</h4>
                        <p>No hay productos en el carrito</p>
                        <hr/>
                        <p className="mb-0">
                            <Link to="/" className="btn btn-info btn-md">
                                <i className="bi bi-cart"></i> 
                                Continuar comprando 
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    const items = () => {
        return (
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"> </th>
                            <th scope="col">Título</th>
                            <th scope="col" className="text-center">Cantidad</th>
                            <th scope="col" className="text-right">Precio</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carritoReducer.items.map(item => { 
                                return (
                                    <tr>	                            		
                                        <td>
                                            <img src="https://dummyimage.com/50x50/55595c/fff"/> 
                                        </td>
                                        <td>
                                            {item.titulo}
                                        </td>
                                        <td>
                                            <input id="CANTIDAD_9" className="form-control" type="text" value="1"/>
                                        </td>
                                        <td className="text-right">
                                            {item.precio}
                                        </td>
                                        <td className="text-right">
                                            <button id="9" className="btn btn-sm btn-primary btnActualizar">
                                                <i className="bi bi-arrow-clockwise"></i> 
                                            </button>
                                            <button id="9" className="btn btn-sm btn-danger btnEliminar">
                                                <i className="bi bi-trash"></i> 
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        } 
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><strong>Total</strong></td>
                            <td className="text-right">
                                <strong>2500.0</strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <>
            {                
                carritoReducer.items.length === 0 ? carritoVacio() : items()
            }        
        </>
    )
}
