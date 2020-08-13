import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = () => (
  <React.StrictMode>
    <span>Way Data Solution</span>
  </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
