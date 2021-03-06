import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../AuthService";
import Recommend from "./Recommend";
import Profile from "./Profile";
import Todo from "./Todo";
import Header from "./Header";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Room from "../pages/Room";
import Chatapp from "../components/Chatapp";
import LoggedInRoute from "./chattools/LoggedInLoute";

const App = () => {
  return (
    <div className="ui container">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <LoggedInRoute path="/" exact component={Header} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <LoggedInRoute path="/graduate/room" exact component={Room} />
            <LoggedInRoute path="/graduate/chatapp" exact component={Chatapp} />
            <LoggedInRoute
              path="/graduate/recommend"
              exact
              component={Recommend}
            />
            <LoggedInRoute path="/graduate/todo" exact component={Todo} />
            <LoggedInRoute path="/graduate/profile" exact component={Profile} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
