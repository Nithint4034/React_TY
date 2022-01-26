import React,{useState , useEffect} from 'react'

function UseStateArray() {
    const [hobbies, sethobbies] = useState([])

    const addHobby = () =>{
        /* hobbies.push('Cricket')  //Wrong way of updating the value in reference type
        setHobbies(hobbies)*/

        /*First Way
        sethbbies([...hobbies,'Cricket'])

        /*Secound Way
        const hobbiesCopy = hobbies.slice(0)
        hobbiesCopy.push('Cricket')
        sethobbies(hobbiesCopy)*/

        //Third Way
        const hobbiesCopy = [...hobbies]
        hobbiesCopy.push('Cricket')
        sethobbies(hobbiesCopy)
}
useEffect(()=>{
    console.log('hobbies is changed');
},[hobbies])
    return (
        <div>
            {hobbies.map((hobby,index)=>{
                return <p key={hobbies}></p>
            })}
            <button onClick={addHobby}> Add</button>
        </div>
    )
}

export default UseStateArray
