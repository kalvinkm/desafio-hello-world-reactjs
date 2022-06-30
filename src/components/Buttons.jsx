import React from "react";


function Buttons(props) {
    return(
        <div className="button">
            <button onClick={props.click}>Click On</button>
        </div>
    )
}

export default Buttons