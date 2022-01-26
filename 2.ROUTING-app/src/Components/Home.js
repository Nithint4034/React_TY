import React from 'react'
/* Passing the Properties from App.js to Home.js , to get that in the home we have to mention props in function*/
function Home(props) {
    return (
        <div>
           Home Component 
           <p>User:
                {props.userName}
            </p>
        </div>
    )
}

export default Home
