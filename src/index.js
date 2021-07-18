import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import './index.css';
import Home from './pages/home';
import CustomForm from './pages/form';
import CustomLayout from './pages/layout';
import CustomNavigation from './pages/navigation';
import CustomSurfaces from './pages/surfaces';
import CustomFeedback from './pages/feedback';
import CustomDataDisplay from './pages/data_display';
import CustomUtils from './pages/utils';
import CustomLab from './pages/lab';


import reportWebVitals from './reportWebVitals';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={history}>
      {/* Switch will render the first component that matches the route frist */}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/layout" component={CustomLayout}/>
        <Route exact path="/form" component={CustomForm}/>
        <Route exact path="/navigation" component={CustomNavigation}/>
        <Route exact path="/surfaces" component={CustomSurfaces}/>
        <Route exact path="/feedback" component={CustomFeedback}/>
        <Route exact path="/data-display" component={CustomDataDisplay}/>
        <Route exact path="/utils" component={CustomUtils}/>
        <Route exact path="/lab" component={CustomLab}/>
        <Route component={Home}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
