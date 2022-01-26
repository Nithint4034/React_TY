import React from 'react'
import {withRouter} from 'react-router-dom'
function Test(props) {
    console.log('Test props', props);
    const navigateToLogin = () =>{
        props.history.push('./Login')
    }
    return (
        <div>
            TEST component
            <button onClick={()=>{
                navigateToLogin()
            }}>Login</button>
        </div>
    )
}

export default withRouter(Test)
