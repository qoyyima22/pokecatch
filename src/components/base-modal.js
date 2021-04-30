/** @jsx jsx **/
import React from 'react'
import { jsx, css } from '@emotion/react'
import { blue, bostonRed, white } from '../config/colors'

const Modal = ({ children, show, close, closable, ...rest }) => {
  return show ? (
    <>
      <div
        css={css`
          background: rgba(50, 50, 50, 0.4);
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 3;
        `}
        onClick={closable ? close : () => {}}
      ></div>
      <div
        css={css`
          position: fixed;
          right: 0;
          left: 0;
          top: 30%;
          background: ${white};
          padding: 16px;
          z-index: 4;
          margin: 0 20px;
        `}
        {...rest}
      >
        {children}
      </div>
    </>
  ) : null
}

export default Modal
