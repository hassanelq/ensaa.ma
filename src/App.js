import "./App.css";
import shapeBlur from "./assets/shapeBlur.webp";
import moonLogo from "./assets/moonLogo.svg";
import DreamersLogo from "./assets/dreamersLogo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="cont">
          <img
            src={DreamersLogo}
            alt="DreamersLogo"
            className="DreamersLogo"
          ></img>
          <p className="coming">Coming soon ...</p>
          <p>A new way to communicate</p>
        </div>
      </header>
      <img src={shapeBlur} className="blurBottom"></img>
      <img src={shapeBlur} className="blurTop"></img>
      <div className="Hero_right">
        <img src={moonLogo} alt="moonlogo" className="moonLogo"></img>
      </div>
    </div>
  );
}

export default App;
