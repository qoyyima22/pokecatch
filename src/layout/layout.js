/** @jsx jsx */
import React from 'react'
import Header from '../components/layout-header'
import { jsx, css } from '@emotion/react'
import { white, greenGrass } from '../config/colors'
import bg from '../assets/img/bg.png'
import { SM_SCREEN } from '../config/layouts'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
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
            /* @media (min-width: ${SM_SCREEN}) {
            background: none;
          } */
          `}
        ></div>
        {children}
      </div>
    </>
  )
}

export default Layout
