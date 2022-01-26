import React, { useEffect, useState } from 'react'

function UseEffect2() {
    const [count, setcount] = useState(0)
    
    //useEffect will get executed when count is changed (similar to componentDidMount of class component)
    useEffect(()=>{
        if (count !== 2){
            console.log('componentDidMount useEffect executed');
        }
    },[count])
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
