import heroku from './heroku.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={heroku} className="App-logo" alt="logo" />
        <p>
          First Deploy Heroku.
        </p>
        <a
          className="App-link"
          href="https://www.heroku.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Heroku
        </a>
      </header>
    </div>
  );
}

export default App;
