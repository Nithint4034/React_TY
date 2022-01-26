import React, { useState } from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Login(props) {
    const [userDetails, setuserDetails] = useState({
        email: '',
        password: ''
    })
    const [isEmailValid, setisEmailValid] = useState(true)
    const [emailError, setemailError] = useState('')

    const login = (event) => {
        console.log(event);
        event.preventDefault()
        console.log(userDetails);

        const isValid = validateEmail(userDetails.email)

        if (isValid && userDetails.password) {
            // Programatically navigate
            console.log('props', props);
            // props.history.push('/home')
        } else {
            console.error('not valid');
        }
    }
    const validateEmail = (email) => {
        if (email) {
            setisEmailValid(true)
            setemailError('')
            return true
        } else {
            setisEmailValid(false)
            setemailError('Please enter valid email')
            return false
        }
    }
    const handleChange = (event) => {
        console.log(event.target.name);
        const userDetailsCopy = { ...userDetails }
        userDetailsCopy[event.target.name] =
            event.target.value
        setuserDetails(userDetailsCopy)
    }
    return (
        <div>
            <h3>Please Login to FlipKart Enjoy Shopping</h3>
            <fieldset>
                <form onSubmit={login} style={{ backgroundColor: "lightgrey" }}>
                    <div>
                        <input type="email"
                            name="email"
                            placeholder="Enter email"
                            onChange={(event) => {
                                handleChange(event)
                            }}
                            value={userDetails.email}
                        />
                        {!isEmailValid ? <p style={{
                            color: 'red',
                            fontSize: '8px'
                        }}>{emailError}</p> : null}
                    </div>
                    <div>
                        <input type="password"
                            name="password"
                            placeholder="Enter password"
                            onChange={(event) => {
                                handleChange(event)
                            }}
                            value={userDetails.password}
                        />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                    <h6>Don't have acount then please ? <Link to="/register">Register</Link></h6>
                </form>
            </fieldset>
        </div>
    )
}

export default Login