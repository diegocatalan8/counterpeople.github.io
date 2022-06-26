import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Formulario from './pages/Formulario';
import { Contador } from './pages/Contador';
import {guardarDatos} from "./logic/localStorage"
import { borrar } from "./logic/borrar";
import Boton from "./components/Boton";



function App() {
  const [form, setForm] = useState(true);

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
