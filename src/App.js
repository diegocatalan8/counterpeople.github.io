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
  
  //estados para los inputs
  const [numeroTienda, setNumeroTienda] = useState({campo:"", valido:null});
  const [nombreTienda, setNombreTienda] = useState({campo:"", valido:null});
  const [capacidad, setCapacidad] = useState({campo:"", valido:null});
  const [nombreEmpleado, setNombreEmpleado] = useState({campo:"", valido:null});
  const [idEmpleado, setIdEmpleado] = useState({campo:"", valido:null});
  
  
  
  

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

          numeroTienda = {numeroTienda}
          setNumeroTienda ={setNumeroTienda}
          nombreTienda = {nombreTienda}
          setNombreTienda={setNombreTienda}
          capacidad = {capacidad}
          setCapacidad = {setCapacidad}
          nombreEmpleado={nombreEmpleado}
          setNombreEmpleado={setNombreEmpleado}
          idEmpleado={idEmpleado}
          setIdEmpleado={setIdEmpleado}


          
         
            />


          <div className="container-button-form">
                
                <Boton id ="boton-borrar" 
                       identificacion="boton1" 
                       ejecutar={()=>{
                                                                      
                             borrar();
                             setNumeroTienda({campo: "", valido:null});
                             setNombreTienda({campo: "", valido:null});
                             setCapacidad({campo: "", valido:null});
                             setNombreEmpleado({campo: "", valido:null});
                             setIdEmpleado({campo: "", valido:null});
                             
                                                                                                    
                      }
                        } 
                  name="Borrar"/>

               {
                validacion ? 
                ( <Boton  identificacion="boton2" 
                          ejecutar={()=>{
                          guardarDatos()
                          setForm(false)
                         

                        
                        }
                        } name="Enviar"/>)
                               
                  :

                  (<Boton  identificacion="boton2" 
                           name="Enviar" 
                           ejecutar={
                            ()=>{
                              if(numeroTienda.valido == false || numeroTienda.campo == ""){
                                setNumeroTienda({...numeroTienda, valido:false});
                              }
                              if(nombreTienda.valido == false || nombreTienda.campo == ""){
                                setNombreTienda({...nombreTienda, valido:false});
                              }
                              if(capacidad.valido == false || capacidad.campo == ""){
                                setCapacidad({...capacidad, valido:false});
                              }
                              
                             
                            
                              
                            }
                           }
                          
                           />)
                  
                
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
