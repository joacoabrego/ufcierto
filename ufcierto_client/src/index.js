import React from "react";
import ReactDOM from "react-dom";

import Landing from './components/landingPage/Landing'

const App = () => {
  return (
    <div>
      <h1><Landing/></h1>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
