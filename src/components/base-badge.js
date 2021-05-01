/** @jsx jsx **/
import { jsx, css } from '@emotion/react'
import { blue, bostonRed, goldYellow } from '../config/colors'

const Badge = ({ children, i }) => {
  return (
    <span
      css={css`
        padding: 4px 8px;
        border-radius: 16px;
        background: ${goldYellow};
        border: 1px solid ${bostonRed};
        color: ${blue};
        margin: 0 2px;
        font-size: 14px;
        ${i === 0 && 'margin-left: 0px;'}
      `}
    >
      {children}
    </span>
  )
}

export default Badge

export const BadgeWrapperStyle = css`
  white-space: nowrap;
  overflow: auto;
  padding: 8px 0 12px;
`
