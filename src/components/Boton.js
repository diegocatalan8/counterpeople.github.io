import "./Boton.css"

const Boton =(props)=>{

    return(
        <div className="container-button">
            <button id={props.identificacion} type="button" onClick={props.ejecutar}>{props.name}</button>
        </div>
    );
}

export default Boton;