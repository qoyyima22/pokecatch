/** @jsx jsx **/
import { jsx, css } from '@emotion/react'
import { goldFoll } from '../config/colors'

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
