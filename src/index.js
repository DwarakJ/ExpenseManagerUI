import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Expense from './expense';

ReactDOM.render(
  <React.StrictMode>
    <Expense />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
