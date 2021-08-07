import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "bulma/css/bulma.min.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Footer } from "./Components/Footer.js";
import { CustomersDetails } from "./Components/CustomersDetails";
import { TransactionHistory } from "./Components/TransactionHistory";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  //customersDetails
  const [customersDetails, setCustomersDetails] = useState([]);

  //fetching the customersDetails
  useEffect(() => {
    async function fetchCustomersDetails() {
      try {
        const data = await axios.get("http://localhost:8080/customers");
        setCustomersDetails(data.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCustomersDetails();
  }, [customersDetails]);

  //transactionDetails
  const [transactionDetails, setTransactionDetails] = useState([]);

  //fetching the transaction details
  useEffect(() => {
    async function fetchTransactionDetails() {
      try {
        const transactionData = await axios.get("http://localhost:8080/transactions");
        setTransactionDetails(transactionData.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTransactionDetails();
  }, [transactionDetails]);

  // Burger event handler
  const handleBurger = (e) => {
    var navbar = document.querySelector("#" + e.target.dataset.target);
    navbar.classList.toggle("is-active");
    e.target.classList.toggle("is-active");
  };

  return (
    <>
      <HashRouter>
        <Header handleBurger={handleBurger} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/custom-details">
            <CustomersDetails customersDetails={customersDetails} />
          </Route>
          <Route exact path="/transaction-statements">
            <TransactionHistory transactionDetails={transactionDetails} />
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
