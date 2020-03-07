import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Users from './views/Users/pages/Users';
import Homepage from './views/Home/pages/homepage';
import Navigation from './components/Navbar/Navigation';
import { store } from './redux/store';
import Posts from './views/Posts/pages/Posts';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navigation />
        </div>
        <Switch>
          <Route path="/users">
            <Users />
          </Route> <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
