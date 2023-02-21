import React from 'react'
import { Link } from 'react-router-dom'

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
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Datos Personales</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Direcciones</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Mis Tarjetas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
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
                        <ul class="nav flex-column">
                            <li class="nav-item">
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
                            <form noValidate="">
                                <div className="form-group">
                                    <label for="name">Current password</label>
                                    <input className="form-control input" type="text" />
                                </div>
                                <div className="form-group">
                                    <label for="name">New password</label>
                                    <input className="form-control input" type="text" />
                                </div>
                                <div className="form-group">
                                    <label for="name">Confirm New password</label>
                                    <input className="form-control input" type="text" />
                                </div>
                                <button className="btn btn-primary text-right"
                                    type="submit">
                                    Change passowrd
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileNavbar