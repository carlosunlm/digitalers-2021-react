function Profile() {
    return (
        <>
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">E-COMMERCE PROFILE</h1>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-3">
                        <div className="accordion animated fadeIn accordion" id="accordionExample">
                            <div className="card">
                                <div role="tab" id="static-1-header" className="card-header ">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" type="button" aria-expanded="true" aria-controls="static-1">
                                            Foto Perfil
                                        </button>
                                    </h5>
                                </div>
                                <div className="collapse show" role="tabpanel" id="static-1" aria-labelledby="static-1-header">
                                    <div className="card-body">
                                        <div className="row">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item"><a className="nav-link active" href="/user/profile">Profile</a></li>
                                                <li className="list-group-item"><a className="nav-link" href="#">Logout</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div role="tab" id="static-3-header" className="card-header ">
                                    <h5 className="mb-0"><button className="btn btn-link collapsed" type="button" aria-expanded="false"
                                        aria-controls="static-3"> Orders</button></h5>
                                </div>
                            </div>
                            <div className="card">
                                <div role="tab" id="static-2-header" className="card-header ">
                                    <h5 className="mb-0"><button className="btn btn-link collapsed" type="button" aria-expanded="false"
                                        aria-controls="static-2"> Change passowrd</button></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-9">                        
                        <form noValidate="" role="form" className="ng-untouched ng-pristine ng-valid">
                            <h3 _ngcontent-c10="">Personal info</h3>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group"><label htmlFor="name">First Name</label>
                                        <input className="form-control input ng-untouched ng-pristine ng-valid" formcontrolname="name" type="text" />
                                    </div>
                                    <div className="form-group"><label htmlFor="name">Last Name</label>
                                        <input className="form-control input ng-untouched ng-pristine ng-valid" formcontrolname="lastName" type="text" />
                                    </div>
                                    <div className="form-group"><label htmlFor="name">Email</label><input
                                        className="form-control input ng-untouched ng-pristine ng-valid" formcontrolname="email"
                                        type="text" /></div>
                                </div>
                            </div>
                            <h3 _ngcontent-c10="">Address Info</h3>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group"><label htmlFor="name">Pais</label><select
                                        className="form-control ng-untouched ng-pristine ng-valid" formcontrolname="country">
                                        <option _ngcontent-c10="">ARGENTINA</option>
                                        <option _ngcontent-c10="">URUGUAY</option>
                                    </select></div>
                                    <div className="form-group"><label htmlFor="name">Provincia</label><select
                                        className="form-control ng-untouched ng-pristine ng-valid" formcontrolname="city">
                                        <option _ngcontent-c10="">MISIONES</option>
                                        <option _ngcontent-c10="">BUENOS AIRES</option>
                                    </select></div>
                                    <div className="form-group"><label htmlFor="name">Direccion</label><input
                                        className="form-control input ng-untouched ng-pristine ng-valid"
                                        formcontrolname="address" type="text"/></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group"><label className="col-md-3 control-label"></label>
                                        <div className="col-md-12 text-right"><button className="btn btn-primary"
                                            type="submit">Update profile</button></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;