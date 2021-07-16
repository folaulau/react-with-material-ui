import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import './index.css';
import Home from './pages/home';
import reportWebVitals from './reportWebVitals';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={history}>
      {/* Switch will render the first component that matches the route frist */}
      <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route exact path="/signin" component={Signin}/>
        <Route exact path="/signup" component={Signup}/>
        <Route path="/register" component={Register}/>
        <Route path="/account" component={Content}/>
        <Route component={PageNotFound}/> */}
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
