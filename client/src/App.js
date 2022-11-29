import { Route } from 'react-router-dom';

import Welcome from './components/Welcome/Welcome'
import Home from './components/Home/Home'
import Details from './components/Details/Details'
import CreateActivity from './components/CreateActivity/CreateActivity'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Welcome}/>
      <Route exact path='/countries' component={Home}/>
      <Route path='/countries/:id' component={Details}/>
      <Route path='/add-activity' component={CreateActivity}/>
    </div>
  );
}

export default App;