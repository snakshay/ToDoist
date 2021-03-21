import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from './Reducers';
import CustomLogging from './CustomLogging';

const custom = new CustomLogging();
custom.setBodyStyle({ color: 'red' });
custom.log('Created by Akshay Nair ');

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
