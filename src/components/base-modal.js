/** @jsx jsx **/
import React from 'react'
import { jsx, css } from '@emotion/react'
import { white } from '../config/colors'
import { LG_CONTAINER_DEFAULT } from '../config/layouts'

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
        data-testid="modal-outer"
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
          ${LG_CONTAINER_DEFAULT}
        `}
        {...rest}
      >
        {children}
      </div>
    </>
  ) : null
}

export default Modal
