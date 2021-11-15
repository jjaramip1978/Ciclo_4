import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Form from "./pages/Registro/form";

function App() {
  return (
    <div className="App">
      <Router>
      <div className="container">
      <Switch>
          <Route path="/registro">
            <Form/>
          </Route>
      </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
