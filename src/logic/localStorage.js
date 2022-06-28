import { borrar } from "./borrar";
import confetti from "canvas-confetti";



export const guardarDatos = () => {
    let numeroTienda = document.getElementById("numero").value;
    let nombreTienda = document.getElementById("nombre").value;
    let capacidad = document.getElementById("capacidad").value;
    let empleado = document.getElementById("nombre-empleado").value;
    let id = document.getElementById("id").value;

   
    const registro = {
        numeroTienda: numeroTienda,
        nombreTienda: nombreTienda,
        capacidad: capacidad,
        empleado: empleado,
        id: id
    }

    let registroJSON = JSON.stringify(registro);

    localStorage.setItem("registros", registroJSON);

    borrar();
    confetti();
    


}