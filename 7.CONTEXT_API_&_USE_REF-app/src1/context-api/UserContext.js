import React from 'react'
//We are Creating Context Object
const UserContext = React.createContext() 
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export default UserContext
export {UserProvider, UserConsumer}