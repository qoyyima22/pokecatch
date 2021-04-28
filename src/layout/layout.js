/** @jsx jsx */
import React from 'react';
import Header from "../components/layout-header"
import { jsx, css } from "@emotion/react"
import { bostonRed } from '../config/colors'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div css={css`
          background: rgb(255,255,255);
          background: linear-gradient(345deg, rgba(255,255,255,1) 0%, ${bostonRed});
      `}>
        {children}
      </div>
    </>
  );
};

export default Layout