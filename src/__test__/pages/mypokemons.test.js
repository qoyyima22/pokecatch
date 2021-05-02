import React from 'react'
import { render, cleanup } from '@testing-library/react'
import MyPokemons from '../../pages/mypokemons'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from '../../context'

afterEach(cleanup)

const RenderMyPokemons = () => {
  return (
    <Provider>
      <MyPokemons />
    </Provider>
  )
}

describe('This will test MyPokemons Component', () => {
  test('renders without crash MyPokemons page', () => {
    const { getByTestId } = render(<RenderMyPokemons />, { wrapper: MemoryRouter })
  })
})
