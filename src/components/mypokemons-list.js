/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { useAppContext } from 'src/context'

const MyPokemonsList = () => {
  let data = useAppContext()
  return <div>{JSON.stringify(data)}</div>
}

export default MyPokemonsList
