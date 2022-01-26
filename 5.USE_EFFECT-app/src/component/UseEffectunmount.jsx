import React, { useEffect, useState } from 'react'

function UseEffect2() {
    const [count, setcount] = useState(0)

    useEffect(() => {
            console.log('componentDidMount useEffect executed')
         //the return call back function will get executed when component is about to unmount from the real dom
        //(similar to componentDidUnmount of class component)
            return () =>{
                console.log('componentWillUnmount useeffect will be executed');
            }
    }, [])
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
