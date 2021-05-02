/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'
import { bostonRed } from '../config/colors'
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons'
import Input from './base-input'
import { validate } from '../utils'
import { useAppContext } from '../context'
import Button from './base-button'

const ModalContent = ({ isCatched, name, setIsCatched, img }) => {
  const { state, dispatch } = useAppContext()
  const { owned } = state
  const [nick, setNick] = React.useState(`${name}-${owned?.length || 0}`)
  const [added, setAdded] = React.useState(false)
  const save = () => {
    dispatch({ type: 'ADD_OWNED', data: { name, nick, img } })
    setIsCatched(false)
    // close()
    setAdded(true)
  }
  const rules = [
    {
      rule: (val) => owned.map((el) => el.nick).includes(val),
      message: `You already have pokemon with that nickname, please choose other nickname`,
    },
    { rule: (val) => !val, message: `Please give this pokemon a nickname` },
  ]
  const isDisabled = validate(rules, nick).length
  return (
    <>
      {!isCatched && !added && (
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <CloseCircleTwoTone
            css={css`
              margin-right: 8px;
            `}
            twoToneColor={bostonRed}
          />
          <h5>You've failed to catch {name}, have fun and try again</h5>
        </div>
      )}
      {isCatched && !added && (
        <>
          <div
            css={css`
              display: flex;
              align-items: center;
              margin-bottom: 16px;
            `}
            data-testid="success-catch"
          >
            <CheckCircleTwoTone
              css={css`
                margin-right: 8px;
              `}
              twoToneColor="#52c41a"
            />
            <h5>You've successfully catch {name}, please give this one a nickname, you're cool!</h5>
          </div>
          <form onSubmit={save} data-testid="nick-form">
            <div
              css={css`
                margin-bottom: 16px;
              `}
            >
              <Input
                data-testid="nick-input"
                value={nick}
                onChange={(e) => setNick(e.target.value)}
                rules={rules}
              />
            </div>
            <div
              css={css`
                display: flex;
                justify-content: center;
              `}
            >
              <Button data-testid="save-button" disabled={isDisabled} type="submit">
                Save
              </Button>
            </div>
          </form>
        </>
      )}
      {added && (
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
          data-testid="success-added"
        >
          <CheckCircleTwoTone
            css={css`
              margin-right: 8px;
            `}
            twoToneColor="#52c41a"
          />
          <h5>{nick} is now your pokemon!</h5>
        </div>
      )}
    </>
  )
}

export default ModalContent
