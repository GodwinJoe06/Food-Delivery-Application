// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RestaurantProvider } from "./context/RestaurantContext";

ReactDOM.render(
  <RestaurantProvider>
    <App />
  </RestaurantProvider>,
  document.getElementById('root')
);
