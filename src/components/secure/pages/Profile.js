import ProfileNavbar from "../components/ProfileNavbar";

function Profile() {
    return (
        <>
            <section className="text-center">
                <div className="container">
                    <h1>E-COMMERCE PROFILE</h1>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-3">
                        <ProfileNavbar/>
                    </div>
                    <div className="col-sm-12 col-lg-9">
                        <form noValidate="" role="form">
                            <h3 >Personal info</h3>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="name">First Name</label>
                                        <input className="form-control input" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Last Name</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Email</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                </div>
                            </div>
                            <h3 >Address Info</h3>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="name">Pais</label>
                                        <select className="form-control">
                                            <option >ARGENTINA</option>
                                            <option >URUGUAY</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Provincia</label>
                                        <select>
                                            <option>MISIONES</option>
                                            <option>BUENOS AIRES</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Direccion</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label className="col-md-3 control-label"></label>
                                        <div className="col-md-12 text-right">
                                            <button className="btn btn-primary" type="submit">Update profile</button>
                                        </div>
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