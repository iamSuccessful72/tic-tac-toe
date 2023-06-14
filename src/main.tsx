import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Game from "./components/Game";

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
