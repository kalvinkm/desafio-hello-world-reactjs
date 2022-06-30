import React from "react";
import Buttons from "./Buttons";


function HelloWorldSix(props) {

    function click() {
        document.getElementById('component').innerHTML = '<h1>Olá Mundo</h1>' + '<br />' + '<p>Componente atribuído através de clique do mouse</p>'

    }

    return(
        <div className="component component-six" id="component">
            
            <Buttons click={click}/>
        </div>
    )
}

export default HelloWorldSix