import logo from './logo.svg';
import './App.css';
import Helloworld from './HelloWorld';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Helloworld/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;