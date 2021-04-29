/** @jsx jsx **/
import React from 'react'
import { jsx, css } from '@emotion/react'
import { CloseCircleTwoTone } from '@ant-design/icons'
import { bostonRed } from '../config/colors'
import { validate } from '../utils'

const Input = ({rules = [], ...rest}) => {
    const { value } = rest
    const [ errors, setErrors ] = React.useState([])
    React.useEffect(() => {
        let temp = validate(rules, value)
        setErrors(temp)
    },[value])
    return (
        <>
          <input css={css`
            height: 24px;
            border-radius: 4px;
            width: 100%;
            `}
            {...rest}
          />
          {
              errors.length ? errors.map((el,i) => (
                  <div css={css`
                  display: flex;
                  align-items: center;
                  margin: 8px 0;
                  `}>
                    <CloseCircleTwoTone css={css`
                    margin-right: 8px;`} 
                    twoToneColor={bostonRed} />
                    <h6 css={css`
                    line-height: 1.6
                    `} key={i}>{el}</h6>
                  </div>
              )) : <span />
          }
        </>
    )
}

export default Input;