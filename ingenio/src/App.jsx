import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Registro from "./pages/Registro/Registro";

function App() {
  return (
    <div className="App">
      <Router>
      <div className="container">
      <Switch>
          <Route exact path="/">
            <Inicio />
          </Route>
          <Route path="/registro">
            <Registro/>
          </Route>
      </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
