import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
//
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
const store =  createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const oldFetch = window.fetch;
window.fetch = (url, settings = {}) => {
  return oldFetch(url, 
    {...settings,
      headers: {...settings.headers, authorization: localStorage.getItem("token")}
    }
    );
};

//
ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));


// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// );

