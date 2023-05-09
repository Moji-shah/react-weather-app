import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          Coded by Mozhgan Shahmohammadi and is{" "}
          <a
            href="https://github.com/Moji-shah/react-weather-app"
            target="_blank"
          >
            {" "}
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
