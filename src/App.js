import logo from "./images/logo.svg";
import CameraInt from "./images/cameraInterna.svg"
import cameraDs from "./images/cameraDs.svg"
import cameraSmart from "./images/cameraSmart.svg"
import "./App.css";

function App() {
  return (
    <div className="App">
      <head className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </head>
      <header>
        <h1>
          Produtos
          {/* <nav>
            <ul>
              <li>
                <a>Adicionar produtos</a>
              </li>
            </ul>
          </nav> */}
        </h1>
        <ul>
          <img src={CameraInt} className="App-Int" alt="int"></img>
        </ul>
      </header>
    </div>
  );
}

export default App;
