import { Route } from "react-router-dom";

import Welcome from "./components/Welcome/Welcome";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import CreateActivity from "./components/CreateActivity/CreateActivity";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/countries" component={Home} />
      <Route path="/countries/:id" component={Details} />
      <Route path="/activities" component={CreateActivity} />
    </div>
  );
}

export default App;