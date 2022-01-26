import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Test from './Components/Test'
function App() {
  return (
    <Router>
        <div className="App">
        <Test />
          <div className="App-link" style={{display: 'flex', justifyContent:'space-evenly', backgroundColor:"red"}}>
            {/* Linking Component each other  'to' is used to  instured of 'href'*/}
            <Link to="/home">Home</Link>      
            <Link to="/login">Login</Link>
          </div>
          <div>
            {/* Switching from one page to another page we use 'Route' */}
            <Route path="/home" render={(props) => {
              return <Home userName="Nithin"  {...props}/>  //Passing the props
            }} />
            <Route path="/login" component={Login} />
          </div>
        </div>
    </Router>
  );
}

export default App;
