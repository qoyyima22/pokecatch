import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';
import Loading from "./components/Loading"
import { Global, css } from '@emotion/react'
import Pokemon from "./assets/fonts/pokemon2.ttf"
import { goldFoll } from "./config/colors"

const AsyncHome = importedComponent(
    () => import(/* webpackChunkName: 'Home' */ './pages/Home'),
    {
      LoadingComponent: Loading
    }
)

const App = () => {
  return (
    <>
        <Global styles={css`
            html, body {
                height: 100%;
                width: 100%;
                margin: 0;
            }
            html {
                background: rgb(255,255,255);
                background: linear-gradient(0deg, rgba(255,255,255,1) 0%, ${goldFoll});
            }
            @font-face {
                font-family: 'Pokemon';
                src: url(${Pokemon}) format('truetype');
                font-weight: 600;
                font-style: normal;
            }
        `} />
        <Router>
        <div>
            <Switch>
            <Route exact path="/" component={AsyncHome} />
            </Switch>
        </div>
        </Router>
    </>
  );
};

export default App;