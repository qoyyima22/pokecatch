import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Home from '../../pages/home'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from '../../context'

afterEach(cleanup)

jest.mock('@apollo/client', () => {
  const data = {
    pokemons: {
      results: [
        {
          name: 'bulbasaur',
          types: {
            type: {
              name: 'grass',
            },
          },
          moves: {
            move: {
              name: 'run',
            },
          },
        },
      ],
    },
  }
  return {
    __esModule: true,
    useQuery: jest.fn(() => ({ data, error: 'error', fetchMore: jest.fn(() => {}) })),
    gql: jest.fn(() => []),
  }
})

const RenderHome = () => {
  return (
    <Provider>
      <Home />
    </Provider>
  )
}

describe('This will test Home Component', () => {
  test('renders without crash Home', () => {
    const { getByTestId } = render(<RenderHome />, { wrapper: MemoryRouter })
    expect(getByTestId('list-container')).toBeInTheDocument()
    fireEvent.scroll(getByTestId('list-container'))
  })
})
