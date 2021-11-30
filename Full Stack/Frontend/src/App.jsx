import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import Registro from "./pages/Registro";
import Buscador from "./pages/Buscador";
import BuscadorProfesionCopy from "./components/buscadorProfesionCopy";
import { Footer } from "./components/footer";
import { Navigation } from "./components/navigation";
import { Ingeniero } from "./components/ingeniero";
import { Empleador } from "./components/empleador";
import { InicioSesion } from "./components/inicioSesion";
import { IngenieroUpdate } from "./components/ingenieroUpdate";

function App() {
  return (
    <div className="app">

      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/registro">
            <Registro />
          </Route>
          <Route path="/ingeniero">
            <Ingeniero />
          </Route>
          <Route path="/ingenieroUpdate">
            <IngenieroUpdate />
          </Route>
          <Route path="/empleador">
            <Empleador />
          </Route>
          <Route path="/inicio-sesion">
            <InicioSesion />
          </Route>
          <Route path="/buscador">
            <Buscador />
          </Route>
          <Route path="/buscadorprofesioncopy">
            <BuscadorProfesionCopy />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
