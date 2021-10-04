import { Link, NavLink } from "react-router-dom";

export default function NavbarComponent() {

    const submitHandler = () => {
        console.log('');
    } 

    return (
        <>      
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink activeClassName="active" className="navbar-brand" to="/">Home</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">      	
                            <li className="nav-item">
                                {/* <a className="nav-link" href="/productos">Productos</a> */}
                                <NavLink activeClassName="active" className="nav-link" to="/productos">Productos</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/secure/profile">Usuario</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li>
                                <Link to="/carrito" className="btn btn-info position-relative">
                                    Carrito
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex" method="post" onSubmit={() =>submitHandler}>
                            <input type="hidden" name="tipoBusqueda" value="CLAVE"/>
                            <input name="claveBusqueda" className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
                        </form>		
                    </div>
                </div>
            </nav>       
        </>
      );
}