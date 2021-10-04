import { useSelector } from "react-redux";
import Articulo from "./Articulo";
import Footer from "./Footer";

export default function ArticulosComponent(props) {

    const articuloReducer = useSelector(
        (state) => state.articulos
    );

    return (
        <>
            <div className="container-fluid">
                <div className="row mt-2">
                    <div className="col">
                        <div className="row g-0 mt-1">
                            {
                                articuloReducer.articulos.map((articulo, index) => {
                                        return <Articulo key={index} articulo={articulo}></Articulo>
                                    }
                                )
                            }
                        </div>
                        <Footer></Footer>
                    </div>

                </div>
            </div>
        </>
    )
}
