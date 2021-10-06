import React from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export const CheckoutSuccessComponent = () => {
    
    const {id} = useParams();

    return (
        <div>
            <h1>Se ha generado la orden {id}</h1>
            <Link to="/" className="btn btn-primary">
                Volver
            </Link>
        </div>
    )
}

export default CheckoutSuccessComponent;