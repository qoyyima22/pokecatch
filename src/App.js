import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import importedComponent from 'react-imported-component'
import Loading from './components/base-loading'
import { Global, css } from '@emotion/react'
import Pokemon from './assets/fonts/pokemon2.ttf'
import Montserrat from './assets/fonts/montserrat.ttf'
import { white } from './config/colors'
import { Provider } from './context'

const Home = importedComponent(() => import(/* webpackChunkName: 'Home' */ './pages/home'), {
  LoadingComponent: Loading,
})

const Detail = importedComponent(() => import(/* webpackChunkName: 'Detail' */ './pages/detail'), {
  LoadingComponent: Loading,
})

const MyPokemons = importedComponent(
  () => import(/* webpackChunkName: 'MyPokemon' */ './pages/mypokemons'),
  {
    LoadingComponent: Loading,
  },
)

const App = () => {
  return (
    <Provider>
      <Global
        styles={css`
          html,
          body {
            height: 100%;
            width: 100%;
            margin: 0;
          }
          @font-face {
            font-family: 'Pokemon';
            src: url(${Pokemon}) format('truetype');
            font-weight: 600;
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
        `}
      />
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail/:name" component={Detail} />
            <Route exact path="/mypokemons" component={MyPokemons} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App
