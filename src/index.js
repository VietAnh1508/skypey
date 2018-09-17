import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import registerServiceWorker from "./registerServiceWorker";

const render = () => {
  log();
  return ReactDOM.render(<App />, document.getElementById("root"));
};
render();

store.subscribe(render);
registerServiceWorker();

function log() {
  console.log("%c Rendered", "background: purple; color: #fff");
  console.log(store.getState());
}
