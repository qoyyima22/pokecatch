import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Button from '../../components/base-button.js'
import { MemoryRouter } from 'react-router-dom'

afterEach(cleanup)

const RenderButton = () => {
  return <Button>Children</Button>
}

describe('This will test MyComponent', () => {
  test('renders message', () => {
    const { getByText } = render(<RenderButton />, { wrapper: MemoryRouter })

    expect(getByText('Children')).toBeInTheDocument()
  })
})
