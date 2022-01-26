import React, { useState } from 'react'


function Login(props) {
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: ''
    })
    const login = (event) => {
        console.log(event);
        event.preventDefault()
        console.log(userDetails);
        if (userDetails.email && userDetails.password) {
            //Programatically navigate
            console.log('props', props);
            props.history.push('/home')     //History Dom Concept
        } else {
            console.error('not valid');
        }
    }
    // const handleEmailChange = (event) => {
    //     console.log(event);
    //     console.log('name', event.target.name);
    //     console.log('value', event.target.value);
    //     //take a copy of state
    //     const userDetailsCopy = { ...userDetails }
    //     userDetailsCopy.email = event.target.value
    //     setUserDetails(userDetailsCopy)
    // }

    // const handlePasswordChange = (event) => {
    //     //take a copy of state
    //     const userDetailsCopy = { ...userDetails }
    //     userDetailsCopy.password = event.target.value
    //     setUserDetails(userDetailsCopy)
    // }

    //Other Way of writing
    const handleChange = (event) => {
        console.log(event.target.name);
        const userDetailsCopy = { ...userDetails }
        userDetailsCopy[event.target.name] = event.target.value
        setUserDetails(userDetailsCopy)
    }

    return (
        <div>
            <form onSubmit={login}>
                <div>
                    <input type="email" name="email" placeholder='enter mail'
                        onChange={(event) => {
                            /*handleEmailChange(event)*/ //First method
                            handleChange(event)
                        }}
                        value={userDetails.email} />  {/*To achieve controled component*/}
                </div>
                <div>
                    <input type="password" name="password" placeholder='enter password'
                        onChange={(event) => {
                            /*handlePasswordChange(event)*/ //First method
                            handleChange(event)
                        }}
                        value={userDetails.password} /> {/*To achieve controled component*/}
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    )
}

export default Login