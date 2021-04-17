import React, { createContext } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Footer from "./components/Footer/Footer";

export const FoodContext = createContext();
function App() {
  return (
    <FoodContext.Provider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/fooddetails/:foodId">
          <FoodDetails/>
        </Route> */}
        </Switch>
        <Footer />
      </Router>
    </FoodContext.Provider>
  );
}

export default App;
