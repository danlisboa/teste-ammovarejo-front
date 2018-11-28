import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Store } from './Store/index';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={Store}>
     <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();