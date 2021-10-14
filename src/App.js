import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>


          <Route path='*'>

          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
