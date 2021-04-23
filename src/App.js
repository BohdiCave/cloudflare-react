import photo from './photo-Bohdan.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={photo} className="App-logo" alt="logo" />
        <h1>
          Sun flares on Cloudflare are particularly strong today!
        </h1>
      </header>
    </div>
  );
}

export default App;
