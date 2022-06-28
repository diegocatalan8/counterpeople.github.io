import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from 'react';
import Formulario from './pages/Formulario';
import { Contador } from './pages/Contador';
import {guardarDatos} from "./logic/localStorage"
import { borrar } from "./logic/borrar";
import Boton from "./components/Boton";
import "./pages/Formulario.css"



function App() {
  
  const [logoReact, setLogo] = useState(true);
  const [form, setForm] = useState(true);
  const [validacion, setValidacion] = useState(false);
 
  
  

  useEffect(()=>{
    setTimeout(()=>{
      console.log("Cargando");
     setLogo(false)
    }, 1500);

  }, [])

  if(logoReact){
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Made in React
        </p>
        <p>
        By Algoritmos Catalán
        </p>
       
      </header>
    </div>
    )
  }
  

  if(form){
    return(
      <div className="App">
          <Formulario 
          validacion={validacion}
          setValidacion={setValidacion}
            />


          <div className="container-button-form">
                
                <Boton  identificacion="boton1" ejecutar={()=>{borrar()}} name="Borrar"/>
               {
                validacion ? ( <Boton  identificacion="boton2" 
                              ejecutar={()=>{guardarDatos()
                               setForm(false)}} name="Enviar"/>)
                               :

                               (<Boton  identificacion="boton2" 
                                name="Enviar"/>)
                  
                
               }

         </div>
      </div>
    )
  }
  
  return (
    <div className="App">
            <Contador/>
    </div>
  );
}

export default App;
