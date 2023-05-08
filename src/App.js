import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        Weather App
        <button className="btn btn-primary">search</button>
        <footer>
          This project was coded by Mozhgan Shahmohammadi and is{" "}
          <a
            href="https://github.com/Moji-shah/react-weather-app"
            target="_blank"
          >
            {" "}
            open-sourced{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
