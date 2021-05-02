import React from 'react'
import { render, cleanup, fireEvent, act, screen } from '@testing-library/react'
import MyPokemons from '../../components/mypokemons-list'
import { MemoryRouter } from 'react-router-dom'
import mockImg from '../../assets/img/poke-test.png'
import { Provider } from '../../context'
import store from 'store'

afterEach(cleanup)

const RenderMyPokemons = () => {
  store.get = jest.fn(() => dataStore)
  return (
    <Provider>
      <MyPokemons />
    </Provider>
  )
}

const RenderMyPokemonsWithoutOwned = () => {
  store.get = jest.fn(() => [])
  return (
    <Provider>
      <MyPokemons />
    </Provider>
  )
}

describe('This will test MyPokemons Component', () => {
  test('renders MyPokemons without crash', () => {
    render(<RenderMyPokemons />, { wrapper: MemoryRouter })
    act(() => {
      fireEvent.click(screen.getByTestId('release-button'))
    })
    expect(screen.getByTestId('modal-outer')).toBeInTheDocument()
    act(() => {
      fireEvent.click(screen.getByTestId('modal-outer'))
    })
  })
  test('renders MyPokemons without crash, with no owned', () => {
    render(<RenderMyPokemonsWithoutOwned />, { wrapper: MemoryRouter })
  })
})

const dataStore = [
  {
    name: 'bulbasaur',
    nick: 'bulbasaur',
    img: mockImg,
  },
]
