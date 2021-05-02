import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Layout from '../../layout/layout.js'
import { MemoryRouter } from 'react-router-dom'

afterEach(cleanup)

const RenderLayout = () => {
  return <Layout>Children</Layout>
}

describe('This will test Layout', () => {
  test('renders children', () => {
    const { getByText } = render(<RenderLayout />, { wrapper: MemoryRouter })

    expect(getByText('Children')).toBeInTheDocument()
  })
})
