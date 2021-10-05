import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { CARRITO_REMOVE, CARRITO_UPDATE } from '../../redux/actions/carrito/actions';

export const CarritoItemRow = (props) => {
    const {item}  = props;

    const [cantidad,setCantidad] = useState(item.cantidad)

    const carritoDispath = useDispatch();

    const updateCantidad = (newCantidad) => {

        if(newCantidad < 0) {
            newCantidad = 0;
        }

        setCantidad(newCantidad);

        let action = CARRITO_UPDATE;

		action.payload = {
			item:  item.item,
			cantidad : newCantidad
		}

		carritoDispath(action);
    }

    const eliminarItem = () => {

        if(window.confirm('Eliminar Item?')) {
            let action = CARRITO_REMOVE;

            action.payload = {
                item:  item.item,
                cantidad : 0
            }

            carritoDispath(action);
        }
    }

    return (
        <>
            <tr>
                <td>
                    <img src="https://dummyimage.com/50x50/55595c/fff"/> 
                </td>
                <td>
                    {item.item.titulo}
                </td>
                <td>
                    <input className="form-control" type="number" value={cantidad} onChange={(e) => updateCantidad(e.target.value)}/>
                </td>
                <td className="text-right">
                    {item.item.precio}
                </td>
                <td className="text-right">
                    <button className="btn btn-sm btn-primary btnActualizar" onClick={()=>updateCantidad(cantidad)}>
                        <i className="bi bi-arrow-clockwise"></i> 
                    </button>
                    <button className="btn btn-sm btn-danger btnEliminar" onClick={()=>eliminarItem()}>
                        <i className="bi bi-trash"></i> 
                    </button>
                </td>
            </tr>
        </>
    )
}
