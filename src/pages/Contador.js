import { Header } from "../components/Header"
import { SectionCounter } from "../components/SectionCounter"
import { Botones } from "../components/Botones"
import "./Contador.css"


export const Contador = ()=>{

    return(
        <div  className="container-counter">
          <Header/>
          <SectionCounter/>
          <Botones/>
        </div>
    )




}