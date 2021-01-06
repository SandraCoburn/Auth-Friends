import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import LogIn from "./components/LogIn";

import "./App.css";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Friends Page</Link>
          </li>
        </ul>
      </nav>
      <header className="App-header">
        <h1> Friends </h1>
      </header>
      <Switch>
        <PrivateRoute path="/protected" component={FriendsList} />
        <Route path="/login" component={LogIn} />
        <Route component={LogIn} />
      </Switch>
    </div>
  );
}

export default App;
