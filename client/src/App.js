import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import CatsContainer from "./containers/CatsContainer/CatsContainer";
import DogsContainer from "./containers/DogsContainer/DogsContainer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/cats" component={CatsContainer} />
        <Route path="/dogs" component={DogsContainer} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
