import React, { useEffect, useState } from 'react'

function UseStatePrimitive() {
    const [userName, setuserName] = useState('')
    const [count, setCount] = useState(0)

    /* if the value of the dependency is changed
    the below useeffect will get executed
    with respect to primitive*/

    useEffect(() => {
        if (userName !== '') {
            console.log('user name is changed');
        }
    }, [userName])

    useEffect(() => {
        if (count !== 0) {
            console.log('count is changed');

        }
    }, [count])

    const updateName = () => {
        console.log("updateName function called");
        setuserName('Guru')
    }

    const updateCount = () => {
        console.log("updateCount function called");
        setCount(count + 5)
    }

    useEffect(() => {
        if (userName !== '') {
            console.log('updateName function called');
        }
    }, [userName])

    return (
        <div>
            {/* {console.log('useStatePrimitive return executed')} */}
            <p>User Name-{userName}</p>
            <button onClick={updateName}>UpdateName</button>
            <p>Count-{count}</p>
            <button onClick={updateCount}>UpdateCount</button>
        </div>
    )
}

export default React.memo(UseStatePrimitive)