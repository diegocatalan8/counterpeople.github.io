import { useState } from "react"
import { Header } from "../components/Header"
import { SectionCounter } from "../components/SectionCounter"
import "./Contador.css"
import { getDatos } from "../logic/getLocalStorage"


export const Contador = ()=>{
    const [contador, setContador] = useState(0);

    let datos = getDatos();
    const {numeroTienda, nombreTienda, capacidad, empleado, id} = datos;

    return(
        <div  className="container-counter">

          <Header/>

          <SectionCounter nombreTienda={nombreTienda} numTienda={numeroTienda} capMax={capacidad} contador={contador} />
          
          <div className="container-botones">
                
                <button type="button" className="boton-restar">-</button>
                <button type="button" className="boton-sumar">+</button>
                
        </div>

        </div>
    )




}