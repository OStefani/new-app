/** To display buttons for registering */
import React from 'react';
function RegisterComponent(props) {
    if (!props.token) {
        return (

            <div >
                <p onClick = { props.handleClickRegister }>Register</p>
                <p>or</p>
                <p onClick= { props.handleClickLogin }>Login</p>
            </div>
        )
    }
    else {
        return (
            <div>
                <p onClick={ props.logOut }>Logout</p>
            </div>
        )
    }
    
}
export default RegisterComponent;