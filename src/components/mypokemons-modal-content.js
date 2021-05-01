/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'
import { CheckCircleTwoTone } from '@ant-design/icons'

const ModalContent = () => {
  return (
    <>
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <CheckCircleTwoTone
          css={css`
            margin-right: 8px;
          `}
          twoToneColor="#52c41a"
        />
        <h5>You have release this pokemon to the wild world!</h5>
      </div>
    </>
  )
}

export default ModalContent
