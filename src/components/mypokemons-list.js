/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'
import { useAppContext } from 'src/context'
import { white, darkGrey } from 'src/config/colors'
import Button from './base-button'

const MyPokemonsList = () => {
  let { state, dispatch } = useAppContext()
  const release = (nick) => {
    dispatch({
      type: 'REMOVE_OWNED',
      nick,
    })
  }
  return (
    <>
      {state.owned.map((el, i) => (
        <div
          key={i}
          css={css`
            padding: 16px 0 0 16px;
            margin: 24px;
            background: ${white};
            height: 140px;
            border-radius: 12px;
            display: flex;
            justify-content: space-between;
            box-shadow: 5px 5px 2px 0px rgba(0, 0, 255, 0.15);
            :first-of-type {
              margin-top: 0;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              align-items: flex-start;
            `}
          >
            <h3
              css={css`
                text-transform: capitalize;
                color: ${darkGrey};
              `}
            >
              {el.nick}
            </h3>
            <h5
              css={css`
                text-transform: capitalize;
                color: ${darkGrey};
              `}
            >
              {el.name}
            </h5>
            <Button onClick={() => release(el.nick)}>Release!</Button>
          </div>
          <div
            css={css`
              position: relative;
            `}
          >
            <img
              css={css`
                position: absolute;
                z-index: 2;
                bottom: 0;
                right: 0;
              `}
              src={el.img}
              alt={`${i}-${el.nick}`}
            />
            <div
              css={css`
                background: red;
                position: absolute;
                bottom: 0;
                right: 0;
                height: 116px;
                width: 116px;
                z-index: 1;
                border-top-left-radius: 116px;
                border-bottom-right-radius: 12px;
              `}
            />
            <div
              css={css`
                position: absolute;
                bottom: 0;
                right: 0;
                height: 28px;
                width: 28px;
                border-top-left-radius: 24px;
                z-index: 1;
                border-left: 12px solid black;
                border-top: 12px solid black;
                box-sizing: border-box;
                background: white;
                border-bottom-right-radius: 12px;
              `}
            />
          </div>
        </div>
      ))}
    </>
  )
}

export default MyPokemonsList
