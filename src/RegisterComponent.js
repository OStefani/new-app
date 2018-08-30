/** To display buttons for registering */
import React from 'react';
function RegisterComponent(props) {
    return (
        <div >
            <p onClick = { props.handleClickRegister }>Register</p>
            <p>or</p>
            <p onClick= { props.handleClickLogin }>Login</p>
        </div>
    )
}
export default RegisterComponent;