import React from "react";
import HelloWorldFive from "./HelloWorldFive";

function HelloWorldFour(props) {
    return(
        <div className="component component-four">
            <h1>{props.title}</h1>
            {props.children}
            <br />
            <HelloWorldFive />
        </div>
    )
}

export default HelloWorldFour