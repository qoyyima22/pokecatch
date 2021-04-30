/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'
import { bostonRed } from 'src/config/colors'
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons'
import Input from './base-input'
import { validate } from 'src/utils'
import { useAppContext } from 'src/context'
import Button from './base-button'

const ModalContent = ({isCatched, name, 
    // setOwned, owned,
     setIsCatched, close, img}) => {
    const { state, dispatch } = useAppContext()
    const { owned } = state
    const [nick, setNick] = React.useState(`${name}-${owned?.length || 0}`)
    const save = () => {
        dispatch({type: 'ADD_OWNED', data: {name,nick,img}})
        setIsCatched(false)
        close()
    }
    const rules = [
        {rule: (val) => owned.map(el => el.nick).includes(val), message: `You already have pokemon with that nickname, please choose other nickname`},
        {rule: (val) => !val, message: `Please give this pokemon a nickname`}
    ]
    const isDisabled = validate(rules,nick).length
    return (
        <>
            {
                !isCatched && (
                    <div css={css`
                    display: flex;
                    align-items: center;
                    `}>
                        <CloseCircleTwoTone css={css`
                        margin-right: 8px;`} 
                        twoToneColor={bostonRed} />
                        <h5>
                            You've failed to catch {name}, have fun and try again
                        </h5>
                    </div>
                )
            }
            {
                isCatched && (
                    <>
                        <div css={css`
                        display: flex;
                        align-items: center;
                        margin-bottom: 16px;
                        `}>
                            <CheckCircleTwoTone css={css`
                            margin-right: 8px;`} twoToneColor="#52c41a" />
                            <h5>
                                You've successfully catch {name}, please give this one a nickname, you're cool!
                            </h5>
                        </div>
                        <form onSubmit={save}>
                            <div css={css`
                                margin-bottom: 16px;
                            `}>
                                <Input value={nick} onChange={(e) => setNick(e.target.value)} rules={rules} />
                            </div>
                            <div css={css`
                                display: flex;
                                justify-content: center;
                            `}>
                                <Button disabled={isDisabled} type='submit'>Save</Button>
                            </div>
                        </form>
                    </>
                )
            }
        </>
    )
}

export default ModalContent