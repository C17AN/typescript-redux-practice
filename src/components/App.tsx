import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">Hi</div>
    </Provider>
  );
}

export default App;
