import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import FoodDetails from "./components/Home/Food/FoodDetails";
import NoMatch from "./components/NoMatch/NoMatch";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/food-details/:id">
          <FoodDetails />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/cart-review">
          <Cart />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
