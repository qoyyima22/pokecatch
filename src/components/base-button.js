/** @jsx jsx **/
import { jsx, css } from '@emotion/react'
import { blue, bostonRed } from '../config/colors'

const Button = ({children}) => {
    return (
        <button css={css`
            display: flex;
            border: none;
            padding: 8px 24px;
            line-height: normal;
            margin: 0;
            text-decoration: none;
            color: #ffffff;
            font-family: Montserrat, sans-serif;
            align-items: center;
            cursor: pointer;
            text-align: center;
            -webkit-appearance: none;
            -moz-appearance: none;
            border-radius: 20px;
            background: linear-gradient(135deg, ${blue} 40%, ${bostonRed});

            :focus {
                outline: none;
                outline-offset: -4px;
            }
        `}>
            {children}
        </button>
    )
}

export default Button;