import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Registro from "./pages/Registro";
import Buscador from "./pages/Buscador";
import {Footer} from "./components/footer";
import {Navigation} from "./components/navigation";

function App() {
  return (
    <div className="app">

      <Navigation />
      <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/registro">
              <Registro />
            </Route>
            <Route path="/buscador">
              <Buscador />
            </Route>
          </Switch>
      </Router>
      <Footer data={landingPageData.Footer} />
    </div>
  );
}

export default App;
