import React from "react";
import "./App.css";
import { ColorModeContext } from "./context";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Home, About, Header } from "./pages";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { modeToTheme } from "./theme";
import { Button } from "@mui/material";

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
