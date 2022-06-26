export const getDatos = () =>{
    let datosJSON = localStorage.getItem("registros");
    let datos = JSON.parse(datosJSON);
    return datos;
}