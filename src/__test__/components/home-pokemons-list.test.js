import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import PokemonsList from '../../components/home-pokemons-list.js'
import { MemoryRouter } from 'react-router-dom'
import mockImg from '../../assets/img/poke-test.png'
import { Provider } from '../../context'

afterEach(cleanup)

const RenderPokemonsList = () => {
  return (
    <Provider>
      <PokemonsList pokemons={pokemons} onLoadMore={() => {}} loading={false} />
    </Provider>
  )
}
const RenderPokemonsListLoading = () => {
  return (
    <Provider>
      <PokemonsList pokemons={pokemons} onLoadMore={() => {}} loading={true} />
    </Provider>
  )
}

describe('This will test PokemonsList Component', () => {
  test('renders PokemonsList without crash', () => {
    const { getByTestId } = render(<RenderPokemonsList />, { wrapper: MemoryRouter })
    fireEvent.scroll(getByTestId('list-container'))
  })
  test('renders PokemonsList without crash', () => {
    render(<RenderPokemonsListLoading />, { wrapper: MemoryRouter })
  })
})

const pokemons = [
  {
    name: 'a',
    img: mockImg,
  },
]
