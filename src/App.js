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
            margin: 0 auto;
            max-width: 480px;
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
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
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
            background-color: #fff;
            background-image: -webkit-gradient(
              linear,
              40% 0%,
              75% 84%,
              from(#4d9c41),
              to(#19911d),
              color-stop(0.6, #54de5d)
            );
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
