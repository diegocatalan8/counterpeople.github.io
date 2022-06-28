import "./Formulario.css"
import confetti from 'canvas-confetti';
import { useState } from "react";



const Formulario = (props) =>{
    //Destructuracion de los props
    const {validacion, setValidacion} = props;

    //estados para los inputs
  const [numeroTienda, setNumeroTienda] = useState({campo:"", valido:null});
  const [nombreTienda, setNombreTienda] = useState({campo:"", valido:null});
  const [capacidad, setCapacidad] = useState({campo:"", valido:null});
  const [nombreEmpleado, setNombreEmpleado] = useState({campo:"", valido:null});
  const [idEmpleado, setIdEmpleado] = useState({campo:"", valido:null});

  //Expresiones regulares
  const expresiones = {

    numTienda: /^\d{3,5}$/ ,// 3 a 5 numeros.
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,15}$/, // Letras y espacios, pueden llevar acentos.
    capacidadTienda: /^\d{1,3}$/ ,// 1 a 3 numeros.
    nombreTrabajador: /^[a-zA-ZÀ-ÿ\s]{5,15}$/, // Letras y espacios, pueden llevar acentos.
    id: /^\d{1,3}$/ ,// 1 a 3 numeros.

	
}
//Destructuracion del objeto expresiones
const {numTienda, nombre, capacidadTienda, nombreTrabajador, id} = expresiones;



    //Funciones onChange para los inputs
    const onChangeNumTienda = (e) => {
    
      setNumeroTienda({campo: e.target.value, valido: null});    
    }
    const onChangeNombreTienda = (e) => {
        setNombreTienda({campo: e.target.value, valido: null});
    }
    const onChangeCapacidad = (e) => {
        setCapacidad({campo: e.target.value, valido: null});
    }
    const onChangeNombreEmpleado = (e) => {
        setNombreEmpleado({campo: e.target.value, valido: null});
    }
    const onChangeIdEmpleado = (e) => {
        setIdEmpleado({campo: e.target.value, valido: null});
    }

    //Validacion para las expresiones regulares
    const validacionNumTienda = (e)=>{
        if(numTienda){
            if(numeroTienda.campo == ""){
               
                setNumeroTienda({campo: e.target.value, valido:null});
            }
            else if(numTienda.test(numeroTienda.campo)){
               
                setNumeroTienda({campo: e.target.value, valido:true});    
            }else{
                
                setNumeroTienda({campo: e.target.value, valido:false}); 
            }
        }
    }
    const validacionNombreTienda = (e)=>{
        if(nombre){
            if(nombreTienda.campo == ""){
                
                setNombreTienda({campo: e.target.value, valido:null});
            }
            else if(nombre.test(nombreTienda.campo)){
                
                setNombreTienda({campo: e.target.value, valido:true});    
            }else{
               
                setNombreTienda({campo: e.target.value, valido:false}); 
            }
        }
    }
    const validacionCapacidadTienda = (e)=>{
        if(capacidadTienda){
            if(capacidad.campo == ""){
               
                setCapacidad({campo: e.target.value, valido:null});
            }
            else if(capacidadTienda.test(capacidad.campo)){
               
                setCapacidad({campo: e.target.value, valido:true});    
            }else{
                
                setCapacidad({campo: e.target.value, valido:false}); 
            }
        }
    }
    const validacionNombreEmpleado = (e)=>{
        if(nombreTrabajador){
            if(nombreEmpleado.campo == ""){
                
                setNombreEmpleado({campo: e.target.value, valido:null});
            }
            else if(nombreTrabajador.test(nombreEmpleado.campo)){
                
                setNombreEmpleado({campo: e.target.value, valido:true});    
            }else{
               
                setNombreEmpleado({campo: e.target.value, valido:false}); 
            }
        }
    }
const validacionIdEmpleado = (e)=>{
        if(id){
            if(idEmpleado.campo == ""){
               
                setIdEmpleado({campo: e.target.value, valido:null});
            }
            else if(id.test(idEmpleado.campo)){
               
                setIdEmpleado({campo: e.target.value, valido:true});    
            }else{
                
                setIdEmpleado({campo: e.target.value, valido:false}); 
            }
        }
    }
    
//////////////////////////////
//Estados para las clases
//////////////////////////////

//Clase para el input de numero de la tienda
var nTienda;

if(numeroTienda.valido == true){
    nTienda = "verdeNumTienda";
}
else if(numeroTienda.valido == false){
    nTienda = "rojoNumTienda";
}
else if(numeroTienda.valido == null){
    nTienda = "";
}

//Clase para el input de nombre de la tienda
var nomTienda;

if(nombreTienda.valido == true){
    nomTienda = "verdeNumTienda";
}
else if(nombreTienda.valido == false){
    nomTienda = "rojoNumTienda";
}
else if(nombreTienda.valido == null){
    nomTienda = "";
}

//Clase para el input de capacidad de la tienda
var capTienda;

if(capacidad.valido == true){
    capTienda = "verdeNumTienda";
}
else if(capacidad.valido == false){
    capTienda = "rojoNumTienda";
}
else if(capacidad.valido == null){
    capTienda = "";
}

//Clase para el input de nombre de empleado
var nomEmpleado;

if(nombreEmpleado.valido == true){
    nomEmpleado = "verdeNumTienda";
}
else if(nombreEmpleado.valido == false){
    nomEmpleado = "rojoNumTienda";
}
else if(nombreEmpleado.valido == null){
    nomEmpleado = "";
}

//Clase para el input de id del empleado
var idTrabajador;

if(idEmpleado.valido == true){
    idTrabajador = "verdeNumTienda";
}
else if(idEmpleado.valido == false){
    idTrabajador = "rojoNumTienda";
}
else if(idEmpleado.valido == null){
    idTrabajador = "";
}

//Validamos que todos los campos objeto.valido sea igual a true
if(numeroTienda.valido == true && nombreTienda.valido == true && capacidad.valido == true && nombreEmpleado.valido == true && idEmpleado.valido == true ){
    setValidacion(true);
}




    return (
        <form>
            <div className="title-container">
                    <p>
                    <small>Powered by</small>
                    </p>
                    <h3>Algoritmos Catalán</h3>
            </div>

            <div className="campos">
                    <p   >
                        <label for="numero">Numero de tienda</label>

                        <input  value={numeroTienda.campo}
                                onChange={onChangeNumTienda}
                                onKeyUp={validacionNumTienda}
                                onBlur={validacionNumTienda}
                                className={nTienda}
                                type="text" 
                                id="numero" 
                                name="numero" 
                                placeholder="  p. ej.: 23458"
                                
                                />
                    </p>
                    
                    <p>
                        <label for="nombre">Nombre de tienda</label>

                        <input  value={nombreTienda.campo}
                                onChange={onChangeNombreTienda}
                                onKeyUp={validacionNombreTienda}
                                onBlur={validacionNombreTienda}
                                className={nomTienda}
                               type="text" id="nombre" 
                               name="nombre" 
                               placeholder="  p. ej.: Walmart"
                               />
                    </p>

                    <p>
                        <label for="capacidad">Capacidad</label>

                        <input value={capacidad.campo}
                               onChange={onChangeCapacidad}
                               onKeyUp={validacionCapacidadTienda}
                                onBlur={validacionCapacidadTienda}
                                className={capTienda}
                               type="text" 
                               id="capacidad" 
                               name="capacidad" 
                               placeholder="  p. ej.: 145"
                               />
                    </p>

                     <p>
                        <label for="nombre-empleado">Nombre Empleado</label>

                        <input value={nombreEmpleado.campo}
                               onChange={onChangeNombreEmpleado}
                               onKeyUp={validacionNombreEmpleado}
                                onBlur={validacionNombreEmpleado}
                                className={nomEmpleado}
                               type="text" id="nombre-empleado" 
                               name="nombre-empleado" 
                               placeholder="  p. ej.: Anita la huerfanita"
                               />
                    </p>

                    <p>
                        <label for="id">Id Empleado</label>

                        <input value={idEmpleado.campo}
                               onChange={onChangeIdEmpleado}
                               onKeyUp={validacionIdEmpleado}
                               onBlur={validacionIdEmpleado}
                               className={idTrabajador}
                               type="text" 
                               id="id" 
                               name="id" 
                               placeholder="  p. ej.: 29"
                               />
                    </p>
            </div>
            
           
        </form>
    );
}




export default Formulario;