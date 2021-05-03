/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { goldYellow, blue, bostonRed, white } from '../config/colors'
import { Link } from 'react-router-dom'
import { ShareAltOutlined } from '@ant-design/icons'

const Header = () => {
  const share = () => {
    navigator.share({
      url: document.location.href,
    })
  }

  return (
    <div
      css={css`
        height: 10vh;
        position: sticky;
        display: flex;
        padding: 0;
        justify-content: center;
        align-items: center;
        top: 0;
        z-index: 3;
        /* background-color: ${bostonRed}; */
      `}
    >
      <Link
        to="/"
        css={css`
          text-decoration: none;
        `}
      >
        <h1
          css={css`
            font-family: 'Pokemon';
            color: ${goldYellow};
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: ${blue};
            font-size: 36px;
            letter-spacing: 4px;
          `}
        >
          PokeCatch
        </h1>
      </Link>
      {navigator?.share && (
        <div
          css={css`
            position: absolute;
            right: 12px;
            top: 14px;
            background-color: ${blue}aa;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            height: 36px;
            width: 36px;
          `}
        >
          <ShareAltOutlined
            css={css`
              color: ${white};
            `}
            onClick={share}
          />
        </div>
      )}
    </div>
  )
}

export default Header
