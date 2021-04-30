/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { goldYellow, blue, bostonRed } from "src/config/colors"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div css={css`
            height: 10vh;
            position: sticky;
            display: flex;
            padding: 0;
            justify-content: center;
            align-items: center;
            top: 0;
            z-index: 3;
            background-color: ${bostonRed};
        `}>
            <Link to="/" css={css`
            text-decoration: none;
            `}>
                <h1 css={css`
                    font-family: 'Pokemon';
                    color: ${goldYellow};
                    -webkit-text-stroke-width: 2px;
                    -webkit-text-stroke-color: ${blue};
                    font-size: 36px;
                    letter-spacing: 4px;
                `
                }>PokeCatch</h1>
            </Link>
        </div>
    )
}

export default Header
