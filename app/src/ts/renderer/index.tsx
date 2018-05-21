import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Main } from "./Main";

ReactDOM.render(
  <Main compiler="TypeScript" framework="React" />,
  document.getElementById('app')
);


// код работает только на запущенном webpack-dev-server с включенной опцией --hot
if (module.hot) {
  module.hot.accept('./Main', () => {
    const Component = require<any>('./Main').Main;
    ReactDOM.render(
      <Component />,
      document.getElementById('app')
    );
  });
}
