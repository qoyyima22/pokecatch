import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Catch from '../../components/detail-catch'
import { MemoryRouter } from 'react-router-dom'

afterEach(cleanup)

const RenderCatch = () => {
  return <Catch />
}

describe('This will test Catch Component', () => {
  test('renders catch component without crash', () => {
    const { getByTestId } = render(<RenderCatch />, { wrapper: MemoryRouter })
  })
})
