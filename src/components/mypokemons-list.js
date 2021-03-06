/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context'
import { white, darkGrey, goldYellow } from '../config/colors'
import Button from './base-button'
import Modal from './base-modal'
import ModalContent from './mypokemons-modal-content'
import { LG_CONTAINER_DEFAULT, SM_SCREEN } from '../config/layouts'
import { bostonRed } from '../config/colors'

const MyPokemonsList = () => {
  let { state, dispatch } = useAppContext()
  const [isModal, setModal] = React.useState(false)
  const release = (nick) => {
    dispatch({
      type: 'REMOVE_OWNED',
      nick,
    })
    setModal(true)
  }
  return (
    <div
      css={css`
        height: 90vh;
        overflow-y: auto;
      `}
    >
      {state?.owned?.length ? (
        state.owned.map((el, i) => (
          <div
            key={i}
            css={css`
              padding: 16px 0 0 16px;
              margin: 24px;
              margin-bottom: 24px !important;
              background: ${white};
              height: 140px;
              border-radius: 12px;
              display: flex;
              justify-content: space-between;
              box-shadow: 5px 5px 2px 0px rgba(0, 0, 255, 0.15);
              /* :first-of-type {
                margin-top: 0;
              } */
              ${LG_CONTAINER_DEFAULT}
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
              <Button data-testid="release-button" onClick={() => release(el.nick)}>
                Release!
              </Button>
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
        ))
      ) : (
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 16px;
            background: ${goldYellow}aa;
            padding: 12px;
            border-radius: 20px;
            margin: 0 24px;
            ${LG_CONTAINER_DEFAULT}/* @media (min-width: ${SM_SCREEN}) {
              margin-bottom: 24px;
            } */
          `}
        >
          <h4
            css={css`
              color: ${bostonRed};
              margin-bottom: 16px;
              text-align: center;
            `}
          >
            You don't have any pokemons right now. Go and catch some.
          </h4>
          <Link to="/">
            <Button>Catch Pokemons!</Button>
          </Link>
        </div>
      )}
      <Modal close={() => setModal(false)} show={isModal} closable>
        <ModalContent />
      </Modal>
    </div>
  )
}

export default MyPokemonsList
