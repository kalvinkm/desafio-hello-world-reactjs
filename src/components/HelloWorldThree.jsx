import React from "react";


function HelloWorldThree(props) {
    return(
        <div className="component component-three">
            <h1>{props.title}</h1>
            <p>Componente usando {props.subtitle}</p>
        </div>
    )
}

export default HelloWorldThree