/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { goldYellow, blue, goldFoll } from "src/config/colors"
// import Pokemon from "../assets/fonts/pokemon/pokemon1.ttf"

const Header = () => {
    return (
        <div css={css`
            height: 200px;
            position: sticky;
            display: flex;
            padding: 0;
            justify-content: center;
            align-items: center;
            top: 0;
            z-index: 3;
            background-color: ${goldFoll};
        `}>
            <h1 css={css`
                font-family: 'Pokemon';
                color: ${goldYellow};
                -webkit-text-stroke-width: 2px;
                -webkit-text-stroke-color: ${blue};
                font-size: 48px;
                letter-spacing: 4px;
            `
            }>PokeCatch</h1>
        </div>
    )
}

export default Header
