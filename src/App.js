import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Checkout from './Components/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/checkout'>
            <Navbar/>
            <Checkout/>
          </Route>
          <Route path='/login'>
            <h1>Login</h1>
          </Route>
          <Route path='/'>
            <Navbar />
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
