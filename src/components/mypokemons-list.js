/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { useAppContext } from 'src/context'
import { white } from 'src/config/colors'

const MyPokemonsList = () => {
  let { state, dispatch } = useAppContext()
  // return <div>{JSON.stringify(data)}</div>
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        padding: 0 4vw;
        flex-wrap: wrap;
        height: 90vh;
        align-items: flex-start;
        overflow-y: auto;
      `}
    >
      {state.owned.map((el, i) => (
        <div
          css={css`
            margin: 2vw;
            background: ${white};
            border-radius: 20px;
            width: 92vw;
            height: 20vh;
            /* flex: 1; */
            /* flex-basis: 0.5; */
            /* flex-grow: 0.5; */
          `}
        >
          <img
            css={css`
              height: 100%;
            `}
            src={el.img}
            alt={el.name}
          />
        </div>
      ))}
    </div>
  )
}

export default MyPokemonsList
