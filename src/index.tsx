import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = () => (
  <React.StrictMode>
    <div>Way Data Solution</div>
  </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
