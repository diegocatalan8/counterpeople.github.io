import "./Formulario.css"
import { useState, useEffect } from "react";



const Formulario = (props) =>{


    
   

    //Destructuracion de los props
    const {validacion, setValidacion,
    
    numeroTienda ,
    setNumeroTienda,
    nombreTienda ,
    setNombreTienda,
    capacidad ,
    setCapacidad ,
    nombreEmpleado,
    setNombreEmpleado,
    idEmpleado,
    setIdEmpleado

} = props;

useEffect(()=>{
    console.log(validacion);
}, [validacion])

   

    


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
////////////////////////////////////////////////
    //Validacion para las expresiones regulares
    const validacionNumTienda = (e)=>{
        if(numTienda){
            if(numeroTienda.campo == ""){
               
                setNumeroTienda({campo: e.target.value, valido:null});
            }
            
            else if(numTienda.test(numeroTienda.campo)){
               
                setNumeroTienda({campo: e.target.value, valido:true});    
            }
            else{
                
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
var inputClaseNumTienda; //Variable que sera la clase para el campo input, cambiara de verde a rojo.
var errorFieldNumTienda; //variable que sera la clase que muestre el mensaje de error.
var validoFieldNumTienda; //variable que sera la clase que muestre el mensaje de validacion.

if(numeroTienda.valido == true){
    inputClaseNumTienda = "campoVerde";
    validoFieldNumTienda = "mensajeVerde";
    errorFieldNumTienda = "none";
   
    
}
else if(numeroTienda.valido == false){
    inputClaseNumTienda = "campoRojo";
    errorFieldNumTienda = "mensajeRojo";
    validoFieldNumTienda = "none";
    
}
else if(numeroTienda.valido == null){
    inputClaseNumTienda = "";
    errorFieldNumTienda = "none";
    validoFieldNumTienda = "none";

}



//Clase para el input de nombre de la tienda
var inputClaseNombreTienda; //Variable que sera la clase para el campo input, cambiara de verde a rojo.
var errorFieldNombreTienda; //variable que sera la clase que muestre el mensaje de error.
var validoFieldNombreTienda; //variable que sera la clase que muestre el mensaje de validacion.


if(nombreTienda.valido == true){
    inputClaseNombreTienda = "campoVerde";
    validoFieldNombreTienda = "mensajeVerde";
    errorFieldNombreTienda = "none";
}
else if(nombreTienda.valido == false){
    inputClaseNombreTienda = "campoRojo";
    errorFieldNombreTienda = "mensajeRojo";
    validoFieldNombreTienda = "none";
}
else if(nombreTienda.valido == null ){
    inputClaseNombreTienda = "";
    errorFieldNombreTienda = "none";
    validoFieldNombreTienda = "none";

}

//Clase para el input de capacidad de la tienda
var inputClaseCapacidad; //Variable que sera la clase para el campo input, cambiara de verde a rojo.
var errorFieldCapacidad; //variable que sera la clase que muestre el mensaje de error.
var validoFieldCapacidad; //variable que sera la clase que muestre el mensaje de validacion.

if(capacidad.valido == true){
   inputClaseCapacidad = "campoVerde";
    validoFieldCapacidad = "mensajeVerde";
    errorFieldCapacidad = "none";
}
else if(capacidad.valido == false){
    inputClaseCapacidad = "campoRojo";
    errorFieldCapacidad = "mensajeRojo";
    validoFieldCapacidad = "none";
}
else if(capacidad.valido == null ){
    inputClaseCapacidad = "";
    errorFieldCapacidad = "none";
    validoFieldCapacidad = "none";

}

//Clase para el input de nombre de empleado
var inputClaseNombreEmpleado; //Variable que sera la clase para el campo input, cambiara de verde a rojo.
var errorFieldNombreEmpleado; //variable que sera la clase que muestre el mensaje de error.
var validoFieldNombreEmpleado; //variable que sera la clase que muestre el mensaje de validacion.

if(nombreEmpleado.valido == true){
    inputClaseNombreEmpleado = "campoVerde";
    validoFieldNombreEmpleado = "mensajeVerde";
    errorFieldNombreEmpleado = "none";
}
else if(nombreEmpleado.valido == false){
    inputClaseNombreEmpleado = "campoRojo";
    errorFieldNombreEmpleado = "mensajeRojo";
    validoFieldNombreEmpleado = "none";
}
else if(nombreEmpleado.valido == null){
    inputClaseNombreEmpleado = "";
    errorFieldNombreEmpleado = "none";
    validoFieldNombreEmpleado = "none";
}

//Clase para el input de id del empleado
var inputClaseId; //Variable que sera la clase para el campo input, cambiara de verde a rojo.
var errorFieldId; //variable que sera la clase que muestre el mensaje de error.
var validoFieldId; //variable que sera la clase que muestre el mensaje de validacion.

if(idEmpleado.valido == true){
    inputClaseId = "campoVerde";
    validoFieldId = "mensajeVerde";
    errorFieldId = "none";
}
else if(idEmpleado.valido == false){
    inputClaseId = "campoRojo";
    errorFieldId = "mensajeRojo";
    validoFieldId = "none";
}
else if(idEmpleado.valido == null){
    inputClaseId = "";
    errorFieldId = "none";
    validoFieldId = "none";
}

setValidacion(false);

if(numeroTienda.valido == true && nombreTienda.valido == true && capacidad.valido == true ){
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
                    <p>
                        <label for="numero">Numero de tienda</label>

                        <input  value={numeroTienda.campo}
                                onChange={onChangeNumTienda}
                                onKeyUp={validacionNumTienda}
                                onBlur={validacionNumTienda}
                                className={inputClaseNumTienda}
                                type="text" 
                                id="numero" 
                                name="numero" 
                                placeholder="  p. ej.: 23458"
                                maxlength="5"
                                
                                />

                            <span id="error1" className={errorFieldNumTienda} >Debe de ingresar solo numeros, de 3 a 5 digitos.</span>
                            <span id="validacion1" className={validoFieldNumTienda} >Numero de tienda valido.</span>
                    </p>
                    
                    <p>
                        <label for="nombre">Nombre de tienda</label>

                        <input  value={nombreTienda.campo}
                                onChange={onChangeNombreTienda}
                                onKeyUp={validacionNombreTienda}
                                onBlur={validacionNombreTienda}
                                className={inputClaseNombreTienda}
                               type="text" id="nombre" 
                               name="nombre" 
                               maxlength="15"
                               placeholder="  p. ej.: Walmart"
                               />
                        <span id="error2" className={errorFieldNombreTienda} >Debe de ingresar el nombre de la tienda, no mas de 15 letras.</span>
                        <span id="validacion2" className={validoFieldNombreTienda} >Nombre de tienda valido.</span>
                    </p>

                    <p>
                        <label for="capacidad">Capacidad</label>

                        <input value={capacidad.campo}
                               onChange={onChangeCapacidad}
                               onKeyUp={validacionCapacidadTienda}
                                onBlur={validacionCapacidadTienda}
                                className={inputClaseCapacidad}
                               type="text" 
                               id="capacidad" 
                               name="capacidad" 
                               maxlength="3"
                               placeholder="  p. ej.: 145"
                               />
                        <span className={errorFieldCapacidad} >La capacidad debe de ser un numero maximo de 3 digitos.</span>
                        <span className={validoFieldCapacidad} >La capacidad es accesible.</span>
                    </p>

                     <p>
                        <label for="nombre-empleado">Nombre Empleado - <span className="opcional">Optional</span></label>

                        <input value={nombreEmpleado.campo}
                               onChange={onChangeNombreEmpleado}
                               onKeyUp={validacionNombreEmpleado}
                                onBlur={validacionNombreEmpleado}
                                className={inputClaseNombreEmpleado}
                               type="text" id="nombre-empleado" 
                               name="nombre-empleado" 
                               maxlength="15"
                               placeholder="  p. ej.: Anita la huerfanita"
                               />
                        <span className={errorFieldNombreEmpleado} >Debe ingresar su nombre de pila.</span>
                        <span className={validoFieldNombreEmpleado} >Nombre aceptable.</span>
                    </p>

                    <p>
                        <label for="id">Id Empleado - <span className="opcional">Optional</span></label>

                        <input value={idEmpleado.campo}
                               onChange={onChangeIdEmpleado}
                               onKeyUp={validacionIdEmpleado}
                               onBlur={validacionIdEmpleado}
                               className={inputClaseId}
                               type="text" 
                               id="id" 
                               name="id" 
                               maxlength="3"
                               placeholder="  p. ej.: 29"
                               />
                    <span className={errorFieldId} >Debe ingresar su numero de id. No ingresar letras.</span>
                    <span className={validoFieldId} >Id Correcto.</span>
                    </p>
            </div>
            
           
        </form>
    );
}




export default Formulario;