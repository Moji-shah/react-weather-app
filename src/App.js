import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer className="footer">
          Coded by Mozhgan Shahmohammadi and is
          <a
            href="https://github.com/Moji-shah/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            open-sourced
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://chipper-meringue-10e1d4.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
