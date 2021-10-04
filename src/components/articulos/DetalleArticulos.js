import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import { add } from "../../redux/actions/carrito/actions";

export default function DetallearticulosComponent(props) {

	const articulosReducer = useSelector(
		(state) => state.articulos
	);
	const carritoReducer = useSelector(
		(state) => state.carrito
	);
	
	const {id} = useParams();
	const [articulo,setArticulo] = useState({});
	const [cantidad,setCantidad] = useState(0);

    //para cargar datos en un componentes la primera vez
    //uso useEffect
    useEffect( () => {
        const articulo = findArticulo();
		setArticulo(articulo);

		//cantidad del articulo en el carrito
		const itemEnCarrito = carritoReducer.items.filter(item=>item.item.id === parseInt(id));

		debugger;
		if(itemEnCarrito.length > 0) {
			setCantidad(itemEnCarrito.cantidad);
		}else{
			setCantidad(0);
		}
    });
	
    const findArticulo = () => {
        return articulosReducer.articulos.find(x=>x.id === parseInt(id));
    }

	const carritoDispath = useDispatch();

	const submitHandler = () => {
		const addToCart = add;
		addToCart.payload ={
			item:  articulo,
			cantidad : cantidad
		}
		carritoDispath(addToCart);
	}

    return (
        <>
        <div className="row">
			<div className="col-12">
				<h3>Detalle de articulo</h3>			
				<div className="card mb-3">
				  <div className="row g-0">
				    <div className="col-md-5">
				      <img src="/assets/images/ceramica.jpg" className="img-fluid rounded-start" alt="ceramica"/>
				    </div>
				    <div className="col-md-7">
				      <div className="card-body">
				        <h5 className="card-title">{articulo.titulo}</h5>
				        <p className="card-text">{articulo.codigo}</p>
 				        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
						
				        	<input type="hidden" name="ID" value="9"/>
					      	<div className="col-sm-12 col-md-12 col-lg-8 col-xxl-6">
								<div className="input-group mb-3 justify-content-center">
								  <button className="btn btn-warning" type="button" id="btnDecrementar">
								  	<i className="bi bi-cart-dash"></i>
								  </button>
								  <input type="text" className="form-control" placeholder="cantidad" aria-label="" aria-describedby="btnAdd"
								  	value={cantidad}
									onChange={e => setCantidad(e.target.value)}
								  />
								  <button className="btn btn-success" type="button" id="btnIncrementar">
								  	<i className="bi bi-cart-plus"></i>
								  </button>  
								</div>
							  <button id="btnAdd" type="button" className="btn btn-primary w-100" onClick={()=>submitHandler()}>
							  	<i className="bi bi-cart-plus"></i>
							  	Agregar
							  </button>
							</div>
						
				      </div>					  	
				    </div>
				  </div>
				</div>	
			</div>
		</div>
        </>
    )
}
