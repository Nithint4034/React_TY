import { useState } from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentD from './components/ComponentD';
import ComponentF from './components/ComponentF';
import ComponentG from './components/ComponentG';
import RefComponent from './components/RefComponent';
import { DataProvider } from './context-api/DataContext';
import { LoginProvider } from './context-api/LoginContext';
import { UserProvider } from './context-api/UserContext';

function App() {
  const [username,setusername]=useState('kishan')
  const[loginData,setloginData]=useState({
    isLogin:true,
    loggedInUser:'hari'
  })
  let myData='111'
  return (
    <div className="App">
      Context API
      <button onClick={()=>{
        setusername('ajay')
      }}>Update user name</button>postman 
      <UserProvider value={username}>
        {/* <ComponentA username={username} */}
        <ComponentA/>
        <ComponentG/>
      </UserProvider>

      <LoginProvider value={loginData}>
        <ComponentD/>
      </LoginProvider>

      <DataProvider value={myData}>
        <ComponentF/>
      </DataProvider>

      <button onClick={()=>{
        myData='222'
        console.log(myData);
      }}>Update Data</button>

      <hr/>
      <RefComponent/>
  
    </div>
  );
}

export default App;
