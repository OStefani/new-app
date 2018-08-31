import React from 'react';

function RegistrationForm(props) {
    return (
        <div className="form">
        <form onSubmit= { props.submitForm }>
            <input type="text" placeholder="Enter your username" value={props.username} name = 'username' onChange = {props.changeInput}/>
            <input type="password" placeholder="Enter your password" value={ props.password } name='password' onChange = {props.changeInput}/>
            <button >Submit</button>
        </form>
        <p className="message">
            {props.message}
        </p>
        <p onClick = { props.toCatalog } className="linkToCat">To the Catalog</p>
        </div>
    )
}

export default RegistrationForm;