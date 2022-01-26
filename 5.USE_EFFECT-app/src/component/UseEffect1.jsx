import React, {useEffect,useState} from 'react'

function UseEffect1() {
    const [count,setcount] = useState(0)
    // never ever write the useeffect like this , this useeffect will be executed on component mount
    // as well as state or props change and component unmount
    useEffect(()=>{                         //Callback function
        console.log("useeffect executed")
    })                                     //Every time the componentDidMount will bwe executrd
    //Logic to increase the count
    const increaseCount = () =>{
        setcount(count + 1)
    }                              
    return (
        <div>
            <p>UseEffect</p>
            <hr/>
            <p>Count - {count}</p>
            <button onClick={increaseCount}>Increase Count</button>
        </div>
    )
}

export default UseEffect1
