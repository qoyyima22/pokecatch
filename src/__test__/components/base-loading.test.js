import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Loading from '../../components/base-loading.js'
import { MemoryRouter } from 'react-router-dom'

afterEach(cleanup)

const RenderLoading = () => {
  return <Loading>Children</Loading>
}

describe('This will test Loading Component', () => {
  test('renders loading', () => {
    const { getByTestId } = render(<RenderLoading />, { wrapper: MemoryRouter })

    expect(getByTestId('loading')).toBeInTheDocument()
  })
})
