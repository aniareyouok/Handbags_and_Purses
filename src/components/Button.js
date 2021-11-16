import React, {Fragment} from "react";

// Buttons are not showing name on page and console message is undefined
function Button({name, message, disabled}) {
    return (<Fragment>
            <button type="button" disabled={disabled} onClick={() => {
                console.log({message});
            }}>{name}</button>
        </Fragment>
    )
}

export default Button;