import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';
import Loading from "./components/Loading"

const AsyncHome = importedComponent(
    () => import(/* webpackChunkName: 'Home' */ './pages/Home'),
    {
      LoadingComponent: Loading
    }
)

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={AsyncHome} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;