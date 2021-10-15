import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Counter from "./containers/counter";
import Counter1 from "./containers/counter1";
import reducer from "./store/reducers";

const store = createStore(reducer);

function app() {
  return (
    <Provider store={store}>
      <div className="App">
        Using redux
        <br />
        <Counter />
        <Counter1 />
      </div>
    </Provider>
  );
}

export default app;
