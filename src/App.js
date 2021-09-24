import { useState } from "react/cjs/react.development";
import Home from "./components/Home";
import Lista from "./components/Lista";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

//angular
//react
//vue
//node
//VISUAL STUDIO CODE

//C# VISUAL STUDIO
//JAVA ECLIPSE
//PHP -> ()

//SLQ: TOAD, SQL DEVELOPER, HEIDI...

/**
 * Componente principal
 * @returns 
 */
function App() {

  const isLoggeado = localStorage.getItem('logueado') || false; 
  const [logeuado, setLogueado] = useState(isLoggeado);

  return (
    <>      
      <Navbar></Navbar>
      <div className="container">       
        { !logeuado &&  <Login loguear={setLogueado}></Login> }
        { logeuado &&  <Home></Home> }
      </div>
    </>
  );
}

export default App;
