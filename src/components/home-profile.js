/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'
import { bostonRed, white, goldYellow } from 'src/config/colors'
import { Link } from 'react-router-dom'
import store from 'store'
import { LG_CONTAINER_DEFAULT, SM_SCREEN } from 'src/config/layouts'

const Profile = () => {
  const owned = store.get('owned') || []
  return (
    <div
      css={css`
        height: 10vh;
        margin: 0 24px;
        /* margin-bottom: 24px !important; */
        background: ${goldYellow}aa;
        padding: 0 12px;
        border-radius: 20px;
        ${LG_CONTAINER_DEFAULT}
        @media (min-width: ${SM_SCREEN}) {
          margin-bottom: 24px;
        }
      `}
    >
      {owned?.length ? (
        <h5
          css={css`
            color: ${bostonRed};
            height: 35%;
            display: flex;
            align-items: center;
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
          height: ${owned?.length ? '65%' : '100%'};
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
                      height: 30px;
                      width: 30px;
                      border-radius: 15px;
                      object-fit: cover;
                      background: ${white};
                      margin-right: 4px;
                      border: 1px solid ${bostonRed};
                    `}
                  />
                </Link>
              ))}
            </div>
            <div>
              <Link to="/mypokemons">
                <h6
                  css={css`
                    color: ${bostonRed};
                  `}
                >
                  See more &gt;
                </h6>
              </Link>
            </div>
          </>
        ) : (
          <div>
            <h5
              css={css`
                color: ${bostonRed};
                text-align: center;
              `}
            >
              You don't have any pokemon, go and catch them all!
            </h5>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
