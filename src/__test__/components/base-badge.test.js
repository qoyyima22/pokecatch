import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Badge from '../../components/base-badge.js'
import { MemoryRouter } from 'react-router-dom'

afterEach(cleanup)

const RenderBadge = () => {
  return <Badge i={0}>Children</Badge>
}

describe('This will test MyComponent', () => {
  test('renders message', () => {
    const { getByText } = render(<RenderBadge />, { wrapper: MemoryRouter })

    expect(getByText('Children')).toBeInTheDocument()
  })
})
