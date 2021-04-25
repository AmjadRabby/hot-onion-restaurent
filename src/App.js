import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import FoodDetails from "./components/Home/Food/FoodDetails";
import NoMatch from "./components/NoMatch/NoMatch";
import Login from "./components/Auth/Login";
import Cart from "./components/Cart/Cart";
import DeliveryDetails from "./components/DeliveryDetails/DeliveryDetails";
import PrivateRoute from "./components/Auth/PrivateRoute";
import OrderComplete from "./components/OrderComplete/OrderComplete";

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
        <Route path="/register">
          <Login />
        </Route>
        <Route path="/cart-review">
          <Cart />
        </Route>
        <PrivateRoute path="/delivery-details">
          <DeliveryDetails />
        </PrivateRoute>
        <PrivateRoute path="/order-complete">
          <OrderComplete />
        </PrivateRoute>
        <Route path="/home">
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
