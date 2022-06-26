import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from 'react';
import Formulario from './pages/Formulario';
import { Contador } from './pages/Contador';
import {guardarDatos} from "./logic/localStorage"
import { borrar } from "./logic/borrar";
import Boton from "./components/Boton";



function App() {
  const [form, setForm] = useState(true);
  const [logoReact, setLogo] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      console.log("Cargando");
     setLogo(false)
    }, 3000);

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
          <Formulario/>
          <div className="container-button-form">
                
                <Boton  identificacion="boton1" ejecutar={()=>{borrar()}} name="Borrar"/>
                <Boton  identificacion="boton2" 
                ejecutar={()=>{guardarDatos()
                               setForm(false)}} name="Enviar"/>

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
