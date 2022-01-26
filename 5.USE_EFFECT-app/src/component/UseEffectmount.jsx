import React, { useEffect, useState } from 'react'

function UseEffect2() {
    const [count, setcount] = useState(0)
    // useEffect will get executed when component is 
    //mounted to the real dom (similar to componentDidMount of class component)
    useEffect(() => {
        console.log("comonentDidMount useeffect executed")
    },[])                           //to over come the problem we use dependency as empty array
    const increaseCount = () => {
        setcount(count + 1)
    }
    return (
        <div>
            <p>UseEffect</p>
            <hr />
            <p>Count - {count}</p>
            <button onClick={increaseCount}>Increase Count</button>
        </div>
    )
}

export default UseEffect2
