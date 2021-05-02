import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Detail from '../../pages/detail'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from '../../context'

afterEach(cleanup)

jest.mock('@apollo/client', () => {
  const data = {
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
  }
  return {
    __esModule: true,
    useQuery: jest.fn(() => ({ data, error: 'error' })),
    gql: jest.fn(() => []),
  }
})

const RenderDetail = () => {
  return (
    <Provider>
      <Detail />
    </Provider>
  )
}

describe('This will test Detail Component', () => {
  test('renders without crash Detail', () => {
    render(<RenderDetail />, { wrapper: MemoryRouter })
  })
})
