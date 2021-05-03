/** @jsx jsx */
import React from 'react'
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import importedComponent from 'react-imported-component'
import Loading from './components/base-loading'
import { Global, css, jsx } from '@emotion/react'
import Pokemon from './assets/fonts/pokemon2.ttf'
import Montserrat from './assets/fonts/montserrat.ttf'
import { white, bostonRed, darkGrey, greenGrass } from './config/colors'
import { Provider } from './context'

const Home = importedComponent(() => import(/* webpackChunkName: 'Home' */ './pages/home'), {
  LoadingComponent,
})

const Detail = importedComponent(() => import(/* webpackChunkName: 'Detail' */ './pages/detail'), {
  LoadingComponent,
})

const MyPokemons = importedComponent(
  () => import(/* webpackChunkName: 'MyPokemon' */ './pages/mypokemons'),
  {
    LoadingComponent,
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

const LoadingComponent = () => {
  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        background: linear-gradient(160deg, ${greenGrass} 20%, ${white});
      `}
    >
      <Loading />
    </div>
  )
}

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
