import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./style/main.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./stores/store";
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback="...loading">
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Suspense>
  </Provider>
  ,
  document.getElementById("root")
);
