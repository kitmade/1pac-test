import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";
import configureStore from "./store";

import HomePage from "./pages/HomePage";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
