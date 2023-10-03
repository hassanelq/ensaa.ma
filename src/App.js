import "./App.css";
import shapeBlur from "./shapeBlur.webp";
import moonLogo from "./moonLogo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Coming soon ...</p>
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
