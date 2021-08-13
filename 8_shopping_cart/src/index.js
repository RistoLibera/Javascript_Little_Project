import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/main.scss';
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

