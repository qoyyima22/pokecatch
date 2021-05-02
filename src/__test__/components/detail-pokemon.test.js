import React from 'react'
import { render, cleanup, fireEvent, screen, act } from '@testing-library/react'
import DetailPokemon from '../../components/detail-pokemon.js'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from '../../context'
import mockImg from '../../assets/img/poke-test.png'
import store from 'store'

afterEach(cleanup)

const RenderDetailPokemon = () => {
  store.get = jest.fn(() => dataStore)

  return (
    <Provider>
      <DetailPokemon data={data} loading={false} />
    </Provider>
  )
}

const RenderDetailPokemonLoading = () => {
  store.get = jest.fn(() => undefined)
  return (
    <Provider>
      <DetailPokemon data={data} loading={true} />
    </Provider>
  )
}

const RenderDetailCatchMore = () => {
  store.get = jest.fn(() => dataStore)
  return (
    <Provider>
      <DetailPokemon data={dataWithSameName} loading={false} />
    </Provider>
  )
}

describe('This will test DetailPokemon Component', () => {
  test('renders without crash DetailPokemon', () => {
    jest.useFakeTimers()
    render(<RenderDetailPokemon />, { wrapper: MemoryRouter })
    act(() => {
      fireEvent.click(screen.getByTestId('catch-button'))
    })
    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(screen.getByTestId('modal-outer')).toBeInTheDocument()
  })
  test('renders without crash DetailPokemon loading', () => {
    render(<RenderDetailPokemonLoading />, { wrapper: MemoryRouter })
  })
  test('renders without crash DetailPokemon without data.length', () => {
    render(<RenderDetailCatchMore />, { wrapper: MemoryRouter })
  })
})

const dataStore = [
  {
    name: 'bulbasaur',
    nick: 'bulbasaur',
    img: mockImg,
  },
]

const data = {
  name: 'bulbasaur1',
  types: [
    {
      type: {
        name: 'grass',
      },
    },
  ],
  moves: [
    {
      move: {
        name: 'run',
      },
    },
  ],
}

const dataWithSameName = {
  name: 'bulbasaur',
  types: [
    {
      type: {
        name: 'grass',
      },
    },
  ],
  moves: [
    {
      move: {
        name: 'run',
      },
    },
  ],
}
