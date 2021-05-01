/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'
import { bostonRed, white } from 'src/config/colors'
import { Link } from 'react-router-dom'
import store from 'store'

const Profile = () => {
  const owned = store.get('owned') || []
  return (
    <div
      css={css`
        height: 10vh;
        padding: 0 24px;
        background-color: ${bostonRed};
      `}
    >
      {owned?.length ? (
        <h5
          css={css`
            color: ${white};
            height: 20%;
          `}
        >
          You have {owned.length} pokemons
        </h5>
      ) : null}
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 80%;
        `}
      >
        {owned.length ? (
          <>
            <div>
              {owned?.slice(0, 6).map((el, i) => (
                <Link key={i} to={`detail/${el.name}`}>
                  <img
                    src={el.img}
                    css={css`
                      height: 35px;
                      width: 35px;
                      border-radius: 17.5px;
                      object-fit: cover;
                      background: ${white};
                      margin-right: 4px;
                    `}
                  />
                </Link>
              ))}
            </div>
            <div>
              <Link to="/mypokemons">
                <h6>See more &gt;</h6>
              </Link>
            </div>
          </>
        ) : (
          <h5
            css={css`
              color: ${white};
              text-align: center;
            `}
          >
            You don't have any pokemon, go and catch them all!
          </h5>
        )}
      </div>
    </div>
  )
}

export default Profile
