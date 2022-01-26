import './App.css';
import Home from './Components/Home'
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <nav>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', backgroundColor: "red" }}>
              <Link to="/">App</Link>
              <Link to="/home">Home</Link>
              <Link to="/contactus">ContactUS</Link>
              <Link to="/aboutus">AboutUs</Link>
              {/* <Link to="/contactus/contact">Contact</Link> */}
            </div>  
          </nav>
        </div>
        <Route exact={true} path='/'
          render={(props) => {
            return 'App Component'
          }} />
        <Route path="/home" component={Home} />
        <Route exact={true} path="/contactus" component={ContactUs} />
        <Route exact path="/contactus/contact" component={Contact} />
        <Route path="/aboutus" component={AboutUs} />
        {/* <Home/>
      <AboutUs/>
      <ContactUs/>
      <Contact/> */}
      </div>
    </Router>
  );
}

export default App;



