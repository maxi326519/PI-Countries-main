import { Route } from 'react-router-dom';

import Home from './components/Home/Home'
import Details from './components/Details/Details'
import CreateActivity from './components/CreateActivity/CreateActivity'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Henry Countries</h1>
      <Route exact path='/' component={Home}/>
      <Route path='/countries/:id' component={Details}/>
      <Route path='/countries' component={CreateActivity}/>
    </div>
  );
}

export default App;