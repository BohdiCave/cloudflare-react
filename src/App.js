import photo from './photo-Bohdan.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Веселих Свят! З Великоднем вас! <br /> Happy Easter!</h1>
        <div className="anima">
          <img src={photo} className="App-logo" alt="logo" />
        </div>
        <h2>
          Cонячні відблиски на ХмароБлиску cьогодні якісь особливі! 
          <br />
          The Sun flares on Cloudflare are particularly strong today!
        </h2>
      </header>
    </div>
  );
}

export default App;
