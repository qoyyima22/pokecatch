import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Header from '../components/layout-header.js'
import { Router, useHistory, MemoryRouter } from 'react-router-dom'

afterEach(cleanup)

const RenderHeader = () => {
  return <Header />
}

describe('This will test MyComponent', () => {
  test('renders message', () => {
    const { getByText } = render(<RenderHeader />, { wrapper: MemoryRouter })

    expect(getByText('PokeCatch')).toBeInTheDocument()
  })
})
