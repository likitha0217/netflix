import './app.scss'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom';

function App() {
  return (
   
    <Router>
    <Switch>
    <div className="App">
    <Route exact path="/" component={Home} />
    <Route exact path="/Watch" component={Watch} />
    <Route exact path="/Register" component={Register} />
    <Route exact path="/Login" component={Login} />
    </div>
    </Switch>
    </Router>
   
  );
}

export default App;
