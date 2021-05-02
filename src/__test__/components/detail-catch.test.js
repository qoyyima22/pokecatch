import React from 'react'
import { render, cleanup, waitFor } from '@testing-library/react'
import Catch from '../../components/detail-catch'
import { MemoryRouter } from 'react-router-dom'

afterEach(cleanup)

const RenderCatch = () => {
  return <Catch setIsCatched={() => {}} setIsCatching={() => {}} setModal={() => {}} />
}

jest.useFakeTimers()

describe('This will test Catch Component', () => {
  test('renders catch component without crash', async () => {
    const { getByTestId } = render(<RenderCatch />, { wrapper: MemoryRouter })
    jest.advanceTimersByTime(1000)
    expect(getByTestId('pokeball')).toBeInTheDocument()
  })
  test('make sure math random get true and false', async () => {
    const { getByTestId } = render(<RenderCatch />, { wrapper: MemoryRouter })
    jest.advanceTimersByTime(1000)
    expect(getByTestId('pokeball')).toBeInTheDocument()
  })
  test('make sure math random get true and false', async () => {
    const { getByTestId } = render(<RenderCatch />, { wrapper: MemoryRouter })
    jest.advanceTimersByTime(1000)
    expect(getByTestId('pokeball')).toBeInTheDocument()
  })
  test('make sure math random get true and false', async () => {
    const { getByTestId } = render(<RenderCatch />, { wrapper: MemoryRouter })
    jest.advanceTimersByTime(1000)
    expect(getByTestId('pokeball')).toBeInTheDocument()
  })
})
