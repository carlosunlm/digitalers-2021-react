import { useState } from "react/cjs/react.development";
import AppRouters from "./AppRouters";
import Home from "./components/Home";
import Lista from "./components/Lista";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {

  const isLoggeado = localStorage.getItem('logueado') || false; 
  const [logeuado, setLogueado] = useState(isLoggeado);

  return (
    /*
    <>      
      <Navbar></Navbar>
      <div className="container">       
        { !logeuado &&  <Login loguear={setLogueado}></Login> }
        { logeuado &&  <Home></Home> }
      </div>
    </>
    */
    <AppRouters></AppRouters>
  );
}

export default App;
