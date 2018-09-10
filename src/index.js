import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some mhappen!</h2>
      <Button variant="raised" color="primary">
        Hello World
      </Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
