/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'
import PokeballSvg from '../assets/img/pokeball.svg'

const Catch = ({ setIsCatched, setIsCatching, setModal }) => {
  var getRandom = function () {
    return Math.random() < 0.5 ? false : true
  }

  React.useEffect(() => {
    setTimeout(() => {
      let temp = getRandom()
      setIsCatched(temp)
      setIsCatching(false)
      setModal(true)
    }, 1000)
  }, [])

  return (
    <img
      data-testid="pokeball"
      alt="pokeball"
      css={css`
        height: 100px;
        width: 100px;
        position: absolute;
        bottom: 5%;
        left: 20%;
        animation: throw 0.75s;
        animation-fill-mode: forwards;
        @keyframes throw {
          0.0000% {
            transform: translate(0px, 0px) scale(0.95) rotate(0deg);
          }
          9.1724% {
            transform: translate(-6.26vw, -5.418vh) scale(0.9) rotate(20deg);
          }
          17.5620% {
            transform: translate(-11.146vw, -10.566vh) scale(0.85) rotate(40deg);
          }
          25.2440% {
            transform: translate(-14.746vw, -15.443vh) scale(0.8) rotate(60deg);
          }
          32.2993% {
            transform: translate(-17.12vw, -20.036vh) scale(0.75) rotate(80deg);
          }
          38.8154% {
            transform: translate(-18.32vw, -24.371vh) scale(0.7) rotate(100deg);
          }
          44.8856% {
            transform: translate(-18.64vw, -28.435vh) scale(0.65) rotate(120deg);
          }
          50.6076% {
            transform: translate(-17.413vw, -32.241vh) scale(0.6) rotate(140deg);
          }
          56.0800% {
            transform: translate(-15.44vw, -35.788vh) scale(0.55) rotate(160deg);
          }
          61.3985% {
            transform: translate(-12.5vw, -39.088vh) scale(0.5) rotate(180deg);
          }
          66.6510% {
            transform: translate(-8.693vw, -42.142vh) scale(0.45) rotate(200deg);
          }
          71.9130% {
            transform: translate(-4.08vw, -44.938vh) scale(0.4) rotate(220deg);
          }
          77.2461% {
            transform: translate(1.306vw, -47.5vh) scale(0.35) rotate(240deg);
          }
          82.6960% {
            transform: translate(7.413vw, -49.8275vh) scale(0.33) rotate(260deg);
          }
          88.2944% {
            transform: translate(14.13vw, -51.921vh) scale(0.33) rotate(280deg);
          }
          94.0598% {
            transform: translate(21.46vw, -53.78vh) scale(0.33) rotate(300deg);
          }
          100.0000% {
            transform: translate(29.3vw, -55.41vh) scale(0.33) rotate(320deg);
          }
        }
      `}
      src={PokeballSvg}
    />
  )
}

export default Catch
