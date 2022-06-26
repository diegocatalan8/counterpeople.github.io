import "./Formulario.css"
import confetti from 'canvas-confetti';



const Formulario = () =>{


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
                        <input className="col-" type="text" id="numero" name="numero" placeholder="  p. ej.: #2345"/>
                    </p>
                    
                    <p>
                        <label for="nombre">Nombre de tienda</label>
                        <input type="text" id="nombre" name="nombre" placeholder="  p. ej.: Walmart"/>
                    </p>

                    <p>
                        <label for="capacidad">Capacidad</label>
                        <input type="text" id="capacidad" name="capacidad" placeholder="  p. ej.: 145"/>
                    </p>

                     <p>
                        <label for="nombre-empleado">Nombre Empleado</label>
                        <input type="text" id="nombre-empleado" name="nombre-empleado" placeholder="  p. ej.: Anita la huerfanita"/>
                    </p>

                    <p>
                        <label for="id">Id Empleado</label>
                        <input type="text" id="id" name="id" placeholder="  p. ej.: #29"/>
                    </p>
            </div>
            
           
        </form>
    );
}




export default Formulario;