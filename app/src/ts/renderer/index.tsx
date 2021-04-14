import React from "react";
import ReactDOM from "react-dom";

import { Main } from "@renderer/Main";

ReactDOM.render(
  <Main compiler="TypeScript" framework="React" />,
  document.getElementById("app")
);

// works on 'webpack-dev-server' with '--hot' enabled
if (module.hot) {
  module.hot.accept("./Main", () => {
    const Component = require("./Main").Main;
    ReactDOM.render(<Component />, document.getElementById("app"));
  });
}
