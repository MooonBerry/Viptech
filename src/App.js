import logo from "./images/logo.svg";
import CameraInt from "./images/cameraInterna.svg"
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
      </header>
    </div>
  );
}

export default App;
