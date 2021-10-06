import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { CARRITO_REMOVE, CARRITO_REMOVE_ALL } from '../../redux/actions/carrito/actions';

export const CheckoutComponent = () => {
    
	const history = useHistory();

	const carritoReducer = useSelector(
        (state) => state.carrito
    )

	const dispach = useDispatch();

	const [pais, setPais] = useState("");
	const [direccion,setDireccion] = useState('');
	const [nombre,setNombre] = useState('');
	const [apellido,setApellido] = useState('');
	const [email,setEmail] = useState('');		
	// const [medioPago,setMedioPago] = useState('');
	const [cupon,setCupon] = useState('');

	const isDisabled = () => {
		return  pais ==='' || direccion === '' || nombre ==='' || apellido ==='' || email ==='';
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if(window.confirm('¿Generar Orden?')) {
			fetch('https://jsonplaceholder.typicode.com/posts', {
				method: 'POST',
				body: JSON.stringify(
					{
						pais:pais,
						direccion: direccion,
						nombre: nombre,
						apellido: apellido,
						email: email,
						items: carritoReducer.items
					}
				),
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				}
			}).then(response => {
					return response.json()
				}).then(json => {
					//json.id -> 1

					dispach(CARRITO_REMOVE_ALL);

					const id = 1					
					history.push({pathname: `/checkout-success/${id}`});
			});
		}
	}

    const buscarCupon = async () => {
        //consulta a un api rest
        await fetch(`cupon.json`)
        .then(
            (response) => response.json()
        ).then((data) => {
			
            // const newAdd = addAll;
            // newAdd.payload = data
            // dispath(addAll)
        });
    }

    return (
        <div className="row g-5 py-2">
	      <div className="col-md-5 col-lg-4 order-md-last">
	        <h4 className="d-flex justify-content-between align-items-center mb-3">
	          <span className="text-primary">
	          	Tu carrito
	          </span>
	          <span className="badge bg-primary rounded-pill">
	          	1
	          </span>
	        </h4>
	        <ul className="list-group mb-3">
			{
				carritoReducer.items.map((item,index) => {
					return <>
							<li key={index} className="list-group-item d-flex justify-content-between lh-sm">
							<div>
								<h6 className="my-0">{item.item.titulo}</h6>
							</div>
							<span className="text-muted">
								{item.item.precio}
							</span>
						</li>
					</>
				})
			}
			  
	          <li className="list-group-item d-flex justify-content-between bg-light">
	            <div className="text-success">
	              <h6 className="my-0">Promo code</h6>
	              <small>EXAMPLECODE</small>
	            </div>
	            <span className="text-success">-$5</span>
	          </li>
	          <li className="list-group-item d-flex justify-content-between">
	            <span>Total ($)</span>
				<strong>
				{
					carritoReducer.items.reduce( (x,y) => x + (y.item.precio * y.cantidad), 0)
				}
				</strong>
	          </li>
	        </ul>
	        <form className="card p-2">
	          <div className="input-group">
	            <input type="text" className="form-control" placeholder="Código Promoción"
					value={cupon}
					onChange={e => setCupon(e.target.value)}/>
	            <button type="button" className="btn btn-secondary"
					disabled={cupon === ''} 
					onClick={() => buscarCupon()}>
					Aplicar código
				</button>
	          </div>
	        </form>
	      </div>
	      <div className="col-md-7 col-lg-8">
	        <h4 className="mb-3">Dirección Facturación</h4>
	        <form className="needs-validation" onSubmit={e => handleSubmit(e)}>
	          <div className="row g-3">
	            <div className="col-sm-6">
	              <label htmlFor="firstName" className="form-label">
	              	Nombre
	              </label>
	              <input name="NOMBRE" type="text" className="form-control" id="firstName" placeholder="" value={nombre} onChange={e => setNombre(e.target.value)} required=""/>
	              <div className="invalid-feedback">
	                requerido
	              </div>
	            </div>
	            <div className="col-sm-6">
	              <label htmlFor="lastName" className="form-label">
	              	Apellido
	              </label>
	              <input name="APELLIDO" type="text" className="form-control" id="lastName" placeholder="" value={apellido} onChange={e => setApellido(e.target.value)} required=""/>
	              <div className="invalid-feedback">
	                requerido
	              </div>
	            </div>
	            <div className="col-12">
	              <label htmlFor="email" className="form-label">
	              	Email 
	              	<span className="text-muted">
	              		(Optional)
	              	</span>
	              </label>
	              <input name="EMAIL" type="email" className="form-control" id="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required=""/>
	              <div className="invalid-feedback">
	                Please enter a valid email address for shipping updates.
	              </div>
	            </div>
	            <div className="col-12">
	              <label htmlFor="address" className="form-label">Dirección</label>
	              <input name="DIRECCION" type="text" className="form-control" id="address" placeholder="Dirección completa" value={direccion} onChange={e => setDireccion(e.target.value)} required=""/>
	              <div className="invalid-feedback">
	                Ingrese dirección
	              </div>
	            </div>
	            <div className="col-md-5">
	              <label htmlFor="country" className="form-label">
	              	Pais
	              </label>
	              <select 
				  	name="PAIS" 
				  	className="form-select" 
					value={pais}
					onChange={e => setPais(e.target.value)}
					>
	                	<option value="-1">Seleccione...</option>
		                <option value="2">Argentina</option>
		                <option value="3">Brasil</option>
	              </select>
	              <div className="invalid-feedback">
	                Seleccione pais válido
	              </div>
	            </div>
	          </div>
			  {/* 
	          <hr className="my-4"/>
	          <h4 className="mb-3">Pago</h4>
	          <div className="my-3">
                <div className="form-check">
                    <input name="MEDIO_PAGO" value={medioPago} onChange={e => setMedioPago(e.target.value)} type="radio" className="form-check-input ccCheckbox" required=""/>
                    <label className="form-check-label" htmlFor="credit">Efectivo</label>
                </div>
	          </div>
			  */}
			  {/*
	          <div className="row gy-3" id="ccRow">
	            <div className="col-md-7">
	              <label htmlFor="cc-name" className="form-label">Nombre en Tarjeta de Crédito</label>
	              <input type="text" className="form-control cc" id="cc-name" placeholder=""/>
	              <small className="text-muted">Nombre completo como figura en la tarjeta de crédito</small>
	              <div className="invalid-feedback">
	                El nombre es requerido
	              </div>
	            </div>
	            <div className="col-md-5">
	              <label htmlFor="cc-number" className="form-label">Número de tarjeta</label>
	              <input type="text" className="form-control cc" id="cc-number" placeholder=""/>
	              <div className="invalid-feedback">
	                Número de tarjeta es requerido
	              </div>
	            </div>
	            <div className="col-md-3">
	              <label htmlFor="cc-expiration" className="form-label">Vencimiento</label>
	              <input type="text" className="form-control cc" id="cc-expiration" placeholder=""/>
	              <div className="invalid-feedback">
	                Vencimiento es requido
	              </div>
	            </div>
	            <div className="col-md-3">
	              <label htmlFor="cc-cvv" className="form-label">Código Seguridad</label>
	              <input type="text" className="form-control cc" id="cc-cvv" placeholder=""/>
	              <div className="invalid-feedback">
					código de seguridad es requerido
	              </div>
	            </div>
	          </div>
			  */}
	          <hr className="my-4"/>
	          <button className="w-100 btn btn-primary btn-lg" type="submit" disabled={isDisabled()}>
	          	Generar Orden
	          </button>
	        </form>
	      </div>
	    </div>
    )
}

export default CheckoutComponent;