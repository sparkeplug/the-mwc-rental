import React from "react";
import Header from "./header/header";
import Form from "./form/form";
import "./App.css";
import { LinearProgress } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <LinearProgress color="secondary" />
      <Header />
      <Form />
    </div>
  );
}

export default App;
