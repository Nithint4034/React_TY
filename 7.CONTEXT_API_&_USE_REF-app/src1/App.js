import './App.css';
import {useState} from 'react'
import ComponentA from './components/ComponentA'
import ComponentD from './components/ComponentD';
import ComponentF from './components/ComponentF';
import  { UserProvider } from './context-api/UserContext'
import { LoginProvider } from './context-api/LoginContext';
import { DataProvider } from './Context-api/DataContext';
import ComponentClass from './components/ComponentClass';
function App() {
const [username, setusername] = useState ('Nithin')
const [loginData, setloginData] = useState({
  islogin:true,
  loggedInUser:'guru'
})
let myData = '111'
  return (
    <div className="App">
      Context API
      <button
      onClick={()=>{
        setusername('Jalaj')
      }}>Updated username</button>
      <UserProvider value={username}>
      {/* <ComponentA username={username}/> */}
      <ComponentA/>
      <ComponentClass/>
      </UserProvider>

      <LoginProvider value={loginData}>
        <ComponentD/>
      </LoginProvider>

      <DataProvider value={myData}>
        <ComponentF/>
      </DataProvider>

      <button onClick={()=>{
        myData = '222',
        console.log(myData);
      }}>Update Data</button>
    </div>
  );
}
export default App;
