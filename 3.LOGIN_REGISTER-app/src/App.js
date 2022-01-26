import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
function App() {
  return (
    <Router>
        <div className="App">
        
          <div className="App-link" style={{display: 'flex', justifyContent:'space-evenly', backgroundColor:"red"}}>
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/Register">Register</Link>
          </div>
          <div>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/Register" component={Register}/>
          </div>
        </div>
    </Router>
  );
}

export default App;






























// import './App.css';
// import Home from './Components/Home'
// import Login from './Components/Login';
// import Register from './Components/Register';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <div>
//             <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: "red" }}>
//               <Link to="./home">Home</Link>
//               <Link to="./login">Login</Link>
//               <Link to="./register">Register</Link>
//             </div>
//         </div>
//         <Route path="./home" component={Home} />
//         <Route path="./login" component={Login} />
//         <Route path="./register" component={Register} />
//       </div>
//     </Router>
//   );
// }

// export default App;
