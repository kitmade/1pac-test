import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";
import configureStore from "./store";

import SearchBox from "./components/SearchBox";
import ListTable from "./components/ListTable";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div>
        <SearchBox />
        <ListTable />
      </div>
    </Provider>
  );
}

export default App;
