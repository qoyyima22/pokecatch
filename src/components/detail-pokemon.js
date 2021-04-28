/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'
import Loading from './base-loading'

export default function Pokemon({data, loading}) {
    return (
        <div css={css`
        padding-bottom: 80px;
        height: 600px;
        overflow-y: auto;
        `}>
            {
                loading && <Loading />
            }
            {
                !loading && (
                    <>
                        <img css={css`
                            
                        `} 
                        src={data?.sprites?.front_default} alt={data.name} />
                        {
                            JSON.stringify(data)
                        }
                    </>
                )
            }
        </div>
    )
}
