import React from 'react'
import { Link } from 'react-router-dom'
import ChangePassword from './ChangePassword'

function ProfileNavbar() {
    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Profile
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link active" 
                                    aria-current="page"
                                    to={'/secure/profile'}>
                                    Datos Personales
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" 
                                    aria-current="page"
                                    to={'/secure/profile'}>
                                    Direcciones
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" 
                                    aria-current="page"
                                    to={'/secure/profile'}>
                                    Mis Tarjetas
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Ordenes
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link to='/secure/profile/orders'  className='nav-link'>
                                    Ordenes
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Password
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="collapse show" role="tabpanel" id="static-2" aria-labelledby="static-2-header">
                            <ChangePassword></ChangePassword>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileNavbar