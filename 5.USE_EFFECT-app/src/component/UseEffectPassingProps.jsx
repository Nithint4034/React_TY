import React, {useEffect ,useState} from 'react'

function UseEffectPassingProps(props) {
    const [isAdmin ,setisAdmin] = useState(true)

    useEffect(()=>{
        setisAdmin(props.showCompnent)
    },[props.showComponent])

    console.log('rendering UseEffectPassingProps', props.showComponent);
    return (
        <div>
            <p>UseEffectPassingProps</p>
            {isAdmin ? 'Admin' : 'User'}
        </div>
    )
}

export default UseEffectPassingProps
