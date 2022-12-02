import { Route } from "react-router-dom";

import Welcome from "./components/Welcome/Welcome";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import CreateActivity from "./components/CreateActivity/CreateActivity";
import About from "./components/About/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path="/" component={Welcome} />
      <Route path="/countries/page/:id" component={Home}/>
      <Route path="/countries/:id" component={Details} />
      <Route path="/add-activity" component={CreateActivity} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;