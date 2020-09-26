import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is>>>", authUser);
      if (authUser) {
        //the user just logged in /the user was loged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is loggged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []); //will run once when the app component load

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
