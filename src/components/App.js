import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51HWHCaDkoiKcBLKp5BgdJUUnkuHsMELQqMznpSl8ainTeqkZoBXryxInzDK5KxJ51FrMaNxUFKNeEa8l1JrqsrZk00hNLKzQrU"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //console.log("the user is>>>", authUser);
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
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
