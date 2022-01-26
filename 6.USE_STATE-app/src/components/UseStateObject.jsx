import React, { useEffect, useState } from 'react'

function UseStateObject() {
    const [person, setperson] = useState({
        firstName: 'guru',
        lastName: 'K'
    })
    const updateFirstName = () => {
        console.log('First Name', person.firstName);
        console.log('Last Name', person.lastName);
        //person.firstName='Ajith'
        //setPerson(person)

        // setperson({
        //     ...person,
        //     firstName:'Ajith'
        // })

        const personCopy = { ...person }
        personCopy.firstName = 'Ajith'
        setperson(personCopy)
    }
    useEffect(() => {
        console.log('Person is changed');
    }, [person])
    return (
        <div>
            <p>Full Name - {person.firstName}{person.lastName}</p>
            <button onClick={updateFirstName}>
                Update FirstName
            </button>
        </div>
    )
}
export default UseStateObject
