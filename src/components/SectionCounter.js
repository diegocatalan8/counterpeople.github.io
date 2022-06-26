export const SectionCounter = (props) => {

            return(
                <div className="container-section">

                    <section className="section">
                                <h3 className="title-store">{props.nombreTienda} {props.numTienda}</h3>
                                <div className="container-count">
                                    <p className="number-people">{props.contador}</p>
                                    <p className="cap-max"><small>Capacidad Maxima: {props.capMax}</small></p>
                                </div>
                    </section>
                    
                </div>
            )
}