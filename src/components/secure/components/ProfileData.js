import React from 'react'

function ProfileData() {
    return (
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
                            <button className="btn btn-primary" type="submit">
                                Update profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ProfileData