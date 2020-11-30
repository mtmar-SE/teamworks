import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Chatapp from "./Chatapp";
import Recommend from "./Recommend";
import Profile from "./Profile";
import Todo from "./Todo";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Chatapp} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/graduate/recommend" exact component={Recommend} />
            <Route path="/graduate/todo" exact component={Todo} />
            <Route path="/graduate/profile" exact component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
