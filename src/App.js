import React from "react";
import "./App.css";
import { Header } from "./pages";

function App() {
  return (
    <div>
      <Header />
      <h1 className="f2-l">Bolus timer</h1>
      <input placeholder="type your BG" />
      <button className> Run timer </button>
    </div>
  );
}

export default App;
