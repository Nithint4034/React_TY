import logo from './logo.svg';
import './App.css';
import PersonList from './components/PersonList';
import ErrorBoundary from './error-boundary/ErrorBoundary';
import PersonDetail from './components/PersonDetail';
import Err1 from './error-boundary/Err1';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <PersonList />
      </ErrorBoundary>
      <hr />
      <Err1>
        <PersonDetail />
      </Err1>

    </div>
  );
}

export default App;
