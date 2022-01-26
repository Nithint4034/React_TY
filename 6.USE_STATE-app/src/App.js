import {useState} from 'react'
import PureClassComponent from './components/PureClassComponent'
import UseStateArray from './components/UseStateArray';
import UseStateObject from './components/UseStateObject';
import UseStatePrimitive from './components/UseStatePrimitive';

function App() {
  const [isAdmin, setisAdmin] = useState(false)
  return (
    <div className="App">
      {/* <PureClassComponent /> */}
      <p>{isAdmin ? 'Admin' : 'User'}</p>
      <button onClick={()=>{
        setisAdmin(!isAdmin)
      }}>Update Admin</button>
      {/* <UseStatePrimitive /> */}
      {/* <UseStateObject /> */}
      <UseStateArray />
    </div>
  );
}

export default App;
