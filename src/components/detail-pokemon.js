/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'
import Loading from './base-loading'
import { white } from 'src/config/colors'
import Badge, { BadgeWrapperStyle } from './base-badge'
import Button from './base-button'
import Modal from './base-modal'
import { useAppContext } from 'src/context'
import ModalContent from './detail-modal-content' 
import Catch from './detail-catch'

export default function Pokemon({data, loading}) {
    const { state } = useAppContext()
    const [isCatching, setIsCatching] = React.useState(false)
    const [isCatched, setIsCatched] = React.useState(false)
    const { owned } = state
    const [isModal, setModal] = React.useState(false)
    const ownedLength = owned && data ? owned.filter(el => el.name === data.name).length  : 0
    return (
        <div css={css`
        height: 90vh;
        overflow-y: auto;
        position: relative;
        `}>
            {
                loading && <Loading />
            }
            {
                !loading && (
                    <>
                        <div css={css`
                            display: flex;
                            justify-content: center;
                        `}>
                            <img css={css`
                                height: 250px;
                                width: auto;
                                -webkit-animation: mover 0.5s infinite  alternate;
                                animation: mover 0.5s infinite  alternate;
                                @-webkit-keyframes mover {
                                    0% { transform: translateY(0); }
                                    100% { transform: translateY(-20px); }
                                }
                                @keyframes mover {
                                    0% { transform: translateY(0); }
                                    100% { transform: translateY(-20px); }
                                }
                            `} 
                            src={data?.sprites?.front_default} alt={data.name} />
                        </div>
                        {
                            !isCatching && (
                                <div css={css`
                                    background: ${white};
                                    padding: 16px;
                                    margin: 16px;
                                    border-radius: 20px;
                                    height: 250px;
                                `}>
                                    <div css={css`
                                        display: flex;
                                        justify-content: space-between;
                                        align-items: baseline;
                                        margin-bottom: 12px;
                                    `}>
                                        <h2 css={css`
                                            text-transform: capitalize;
                                        `}>
                                            {data.name}
                                        </h2>
                                        <h6>
                                            Owned: {ownedLength}
                                        </h6>
                                    </div>
                                    <div>
                                        <h4 css={css`
                                            margin-bottom: 8px;
                                        `}>
                                            Types: 
                                        </h4>
                                        <div css={BadgeWrapperStyle}>
                                            {
                                                data?.types?.map((el,i) => <Badge i={i} key={i}>{el?.type?.name}</Badge>)
                                            }
                                        </div>
                                    </div>
                                    <div css={css`
                                        margin: 16px 0;
                                    `}>
                                        <h4 css={css`
                                            margin-bottom: 8px;
                                        `}>
                                            Moves: 
                                        </h4>
                                        <div css={BadgeWrapperStyle}>
                                            {
                                                data?.moves?.map((el,i) => <Badge i={i} key={i}>{el?.move?.name}</Badge>)
                                            }
                                        </div>
                                    </div>
                                    <div css={css`
                                        display: flex;
                                        justify-content: center;
                                        margin-top: 32px;
                                    `}>
                                        <Button onClick={() => setIsCatching(true)}>
                                            Catch {!ownedLength ? 'Now!' : 'More!'}
                                        </Button>
                                    </div>
                                </div>
                            )
                        }
                        {
                            isCatching && <Catch setIsCatched={setIsCatched} setIsCatching={setIsCatching} setModal={setModal} />
                        }
                    </>
                )
            }
            <Modal show={isModal} close={() => setModal(false)} closable={!isCatched}>
                <ModalContent close={() => setModal(false)} name={data?.name} isCatched={isCatched} setIsCatched={setIsCatching} img={data?.sprites?.front_default} />
            </Modal>
        </div>
    )
}