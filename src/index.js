import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const isLoad=true;


ReactDOM.render(
  <React.StrictMode>
    <App isLoad={isLoad}/>
  </React.StrictMode>,
  document.getElementById('root')
);

