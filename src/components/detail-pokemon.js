/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'
import Loading from './base-loading'
import { white, bostonRed } from '../config/colors'
import Badge, { BadgeWrapperStyle } from './base-badge'
import store from 'store'
import Button from './base-button'
import Modal from './base-modal'
import PokeballSvg from '../assets/img/pokeball.svg'
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons'
import Input from './base-input'
import { validate } from '../utils' 

export default function Pokemon({data, loading}) {
    const [isCatching, setIsCatching] = React.useState(false)
    const [isCatched, setIsCatched] = React.useState(false)
    const [owned, setOwned] = React.useState(store.get('owned') || [])
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
                <ModalContent close={() => setModal(false)} name={data?.name} isCatched={isCatched} owned={owned} setOwned={setOwned} setIsCatched={setIsCatching} img={data?.sprites?.front_default} />
            </Modal>
        </div>
    )
}

const Catch = ({setIsCatched, setIsCatching, setModal}) => {
    var getRandom = function() {
        return (Math.random() < 0.5 ? false : true);
    }

    React.useEffect(() => {
        setTimeout(() => {
            let temp = getRandom()
            setIsCatched(temp)
            setIsCatching(false)
            setModal(true)
        }, 1000);
    },[])
    
    return (
        <img css={css`
            height: 100px;
            width: 100px;
            position: absolute;
            bottom: 5%;
            left: 20%;
            animation: throw 0.75s;
            animation-fill-mode: forwards;
            @keyframes throw {
                0.0000% { transform: translate(0.0px, 0.0px) scale(0.95) rotate(0deg); ; }
                9.1724% { transform: translate(-6.26vw, -5.418vh) scale(0.9) rotate(20deg); ; }
                17.5620% { transform: translate(-11.146vw, -10.566vh) scale(0.85) rotate(40deg); ; }
                25.2440% { transform: translate(-14.746vw, -15.443vh) scale(0.8) rotate(60deg); ; }
                32.2993% { transform: translate(-17.12vw, -20.036vh) scale(0.75) rotate(80deg); ; }
                38.8154% { transform: translate(-18.32vw, -24.371vh) scale(0.7) rotate(100deg); ; }
                44.8856% { transform: translate(-18.64vw, -28.435vh) scale(0.65) rotate(120deg); ; }
                50.6076% { transform: translate(-17.413vw, -32.241vh) scale(0.6) rotate(140deg); ; }
                56.0800% { transform: translate(-15.44vw, -35.788vh) scale(0.55) rotate(160deg); ; }
                61.3985% { transform: translate(-12.5vw, -39.088vh) scale(0.5) rotate(180deg); ; }
                66.6510% { transform: translate(-8.693vw, -42.142vh) scale(0.45) rotate(200deg); ; }
                71.9130% { transform: translate(-4.08vw, -44.938vh) scale(0.40) rotate(220deg); ; }
                77.2461% { transform: translate(1.306vw, -47.5vh) scale(0.35) rotate(240deg); ; }
                82.6960% { transform: translate(7.413vw, -49.8275vh) scale(0.33) rotate(260deg); ; }
                88.2944% { transform: translate(14.13vw, -51.921vh) scale(0.33) rotate(280deg); ; }
                94.0598% { transform: translate(21.46vw, -53.78vh) scale(0.33) rotate(300deg); ; }
                100.0000% { transform: translate(29.3vw, -55.41vh) scale(0.33) rotate(320deg); }
            }

        `}
         src={PokeballSvg} />
    )
}

const ModalContent = ({isCatched, name, setOwned, owned, setIsCatched, close, img}) => {
    const [nick, setNick] = React.useState(`${name}-${owned?.length || 0}`)
    const save = () => {
        let temp = [...owned, {name, nick, img }]
        store.set('owned', temp)
        setOwned(store.get('owned'))
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