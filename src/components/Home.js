
function Home() {

    return(
        <>
            <main>
            <div className="container py-4">
                <header className="pb-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                    <span className="fs-4">Bienvenido: eduit</span>
                </a>
                </header>
                <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Bienvenido</h1>
                    <p className="col-md-8 fs-4">Sistema de administración de productos</p>
                    <a className="btn btn-primary btn-lg" href="/controllers/BuscarArticuloServlet" role="button">
                        Ver Listado
                    </a> 
                </div>
                </div>
                <footer className="pt-3 mt-4 text-muted border-top">
                Bootcamp java - EducacionIt - 2021
                </footer>
            </div>
            </main>
        </>
    );
}

export default Home;