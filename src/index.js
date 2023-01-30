import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesProvider from "./routes";
import store from "./data/store";
import { Provider } from "react-redux";
import './main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
      <RoutesProvider />
    </Provider>
  </React.StrictMode>
);