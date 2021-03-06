/** @jsx jsx */
import React from 'react'
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import importedComponent from 'react-imported-component'
import { LoadingPage } from './components/base-loading'
import { Global, css, jsx } from '@emotion/react'
import Pokemon from './assets/fonts/pokemon2.ttf'
import Montserrat from './assets/fonts/montserrat.ttf'
import { white, bostonRed, darkGrey } from './config/colors'
import { Provider } from './context'

const Home = importedComponent(() => import(/* webpackChunkName: 'Home' */ './pages/home'), {
  LoadingComponent: LoadingPage,
})

const Detail = importedComponent(() => import(/* webpackChunkName: 'Detail' */ './pages/detail'), {
  LoadingComponent: LoadingPage,
})

const MyPokemons = importedComponent(
  () => import(/* webpackChunkName: 'MyPokemon' */ './pages/mypokemons'),
  {
    LoadingComponent: LoadingPage,
  },
)

const App = () => {
  return (
    <Provider>
      <Global styles={globalStyle} />
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail/:name" component={Detail} />
            <Route exact path="/mypokemons" component={MyPokemons} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App

const globalStyle = css`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }
  body {
  }
  @font-face {
    font-family: 'Pokemon';
    src: url(${Pokemon}) format('truetype');
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat}) format('truetype');
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    margin: 0;
    font-family: Montserrat, open-sans;
  }
  a {
    text-decoration: none;
    color: ${white};
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px ${white};
    background-color: transparent;
    border-radius: 10px;
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
    border-radius: 10px;
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    width: 4px;
    height: 4px;
    background-color: ${white};
    background-image: -webkit-gradient(
      linear,
      40% 0%,
      75% 84%,
      from(${bostonRed}),
      to(${darkGrey}),
      color-stop(0.6, ${bostonRed})
    );
  }
`
