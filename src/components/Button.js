import React, {Fragment} from "react";

// Button component
function Button({name, message, disabled}) {
    return (<Fragment>
            <button type="button" disabled={disabled} onClick={() => {
                console.log({message});
            }}>{name}</button>
        </Fragment>
    )
}

export default Button;