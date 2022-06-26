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
                        
                        <button type="button" className="boton-restar" onClick={()=>{
                            if(contador <= 0){
                                contador = 0;
                            }
                            setContador(contador-1)
                        
                }} >-</button>
                        
                <button type="button" className="boton-sumar" onClick={()=>setContador(contador+1)}>+</button>
                        
                </div>

        </div>
    )




}