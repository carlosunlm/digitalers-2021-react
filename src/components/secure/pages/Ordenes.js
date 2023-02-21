import React from 'react'
import { Link } from 'react-router-dom';
import ProfileNavbar from '../components/ProfileNavbar';

function Ordenes() {
    return (
        <>
            <section className="text-center mb-5">
                <div className="container">
                    <h1>E-COMMERCE PROFILE</h1>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-3">
                        <ProfileNavbar/>
                    </div>
                    <div class="col-sm-12 col-lg-9">
                            <div class="container">
                                <div class="table-wrapper">
                                    <div class="table-filter">
                                        <div class="row">
                                            <div class="col-5 col-sm-5 col-md-6 col-lg-6">
                                                <div class="show-entries">
                                                    <h2>Mis ordenes</h2>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="input-group align-items-center space-arronud">
                                                    <span class="filter-icon input-group-text">
                                                        <i class="bi bi-funnel-fill"></i>
                                                    </span>
                                                    <select class="form-select">
                                                        <option>Todas</option>
                                                        <option>pending</option>
                                                        <option>approved</option>
                                                        <option>rejected</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <table class="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>Número</th>
                                                <th>Status</th>
                                                <th>Total Price</th>
                                                <th>Order Date</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>pending</td>
                                                <td>100</td>
                                                <td>Aug 19, 2016</td>
                                                <td>
                                                    <Link to={'/secure/profile/orders/details/1'}>
                                                        <i class="bi bi-arrow-right-circle-fill" style={{'font-size': '1.5rem', color: 'cornflowerblue'}}></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>approved</td>
                                                <td>110</td>
                                                <td>Jul 19, 2016</td>
                                                <td>
                                                    <a class="view" 
                                                        data-toggle="tooltip" 
                                                        title="View Details"
                                                        href="#/user/orders/details/2">
                                                            <i class="bi bi-arrow-right-circle-fill" style={{'font-size': '1.5rem', color: 'cornflowerblue'}}></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>rejected</td>
                                                <td>120</td>
                                                <td>Jun 19, 2016</td>
                                                <td>
                                                    <a class="view" 
                                                        data-toggle="tooltip" 
                                                        title="View Details"
                                                        href="#/user/orders/details/3">
                                                            <i class="bi bi-arrow-right-circle-fill" style={{'font-size': '1.5rem', color: 'cornflowerblue'}}></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>rejected</td>
                                                <td>120</td>
                                                <td>Jun 19, 2016</td>
                                                <td>
                                                    <a class="view" 
                                                        data-toggle="tooltip" 
                                                        title="View Details"
                                                        href="#/user/orders/details/4">
                                                            <i class="bi bi-arrow-right-circle-fill" style={{'font-size': '1.5rem', color: 'cornflowerblue'}}></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ordenes;