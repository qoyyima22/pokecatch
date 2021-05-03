/** @jsx jsx **/
import { jsx, css } from '@emotion/react'
import { goldFoll, white, greenGrass } from '../config/colors'
import bg from '../assets/img/bg.png'

const Loading = () => {
  return (
    <div
      css={css`
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        data-testid="loading"
        css={css`
          display: inline-block;
          position: relative;
          width: 40px;
          height: 40px;
          div {
            box-sizing: border-box;
            display: block;
            position: absolute;
            width: 40px;
            height: 40px;
            margin: 8px;
            border: 8px solid ${goldFoll};
            border-radius: 50%;
            animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
            border-color: ${goldFoll} transparent transparent transparent;
          }
          div:nth-of-type(1) {
            animation-delay: -0.45s;
          }
          div:nth-of-type(2) {
            animation-delay: -0.3s;
          }
          div:nth-of-type(3) {
            animation-delay: -0.15s;
          }
          @keyframes lds-ring {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loading

export const LoadingPage = () => {
  return (
    <div>
      <div
        css={css`
          background-image: url(${bg});
          background-repeat: repeat-x;
          background-size: contain;
          top: 0;
          bottom: 60%;
          left: 0;
          right: 0;
          width: 100%;
          position: fixed;
          z-index: -1;
          background-color: ${greenGrass};
        `}
      ></div>
      <div
        css={css`
          background: linear-gradient(160deg, ${greenGrass} 20%, ${white});
          top: 40%;
          bottom: 0vh;
          left: 0;
          right: 0;
          width: 100%;
          position: fixed;
          z-index: -1;
        `}
      ></div>
      <Loading />
    </div>
  )
}
