import React, { useState, useEffect} from 'react'

function UseEffectMultiplestState() {
    const [count,setcount] = useState(0)
    const [age, setage] =useState(0)

    useEffect(()=>{
        console.log('componentDidMount useEffect executed')
    },[])

    useEffect(() => {
        if(count !== 0 ){
        console.log('count componentDidMount useEffect executed')
        }
    }, [count])

    useEffect(() => {
        if (age !== 0) {
            console.log('age componentDidMount useEffect executed')
        }
    }, [age])

    useEffect(() => {
            console.log('count & age componentDidMount useEffect executed')
    }, [count,age])

    const increaseCount =()=>{
        setcount(count + 1)
    }
    const increaseAge = () => {
        setage(age + 10)
    }
     return (
        <div>
             <p>UseEffectMultiplestState</p>
            <p>Count - {count}</p>
            <button onClick={increaseCount}>Increase Count</button>
            <p>Age - {age}</p>
            <button onClick={increaseAge}>Increase Age</button>
        </div>
    )
}

export default UseEffectMultiplestState
