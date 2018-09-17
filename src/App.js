import React from "react";
import "./App.css";
import _ from "lodash";
import Sidebar from "./components/layout/Sidebar";
import Main from "./components/layout/Main";
import store from "./store";

const App = () => {
  const { contacts } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
};

export default App;
