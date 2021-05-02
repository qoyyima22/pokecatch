import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Input from '../../components/base-input.js'
import { MemoryRouter } from 'react-router-dom'

afterEach(cleanup)

const RenderInputWithError = () => {
  return <Input rules={[{ rule: (v) => !v, message: 'error' }]} />
}

const RenderInput = () => {
  return <Input />
}

describe('This will test Input Component', () => {
  test('render input with validation error', () => {
    const { getByTestId } = render(<RenderInputWithError />, { wrapper: MemoryRouter })

    expect(getByTestId('input')).toBeInTheDocument()
    expect(getByTestId('error-message')).toBeInTheDocument()
  })
  test('render input without validation error', () => {
    const { getByTestId } = render(<RenderInput />, { wrapper: MemoryRouter })
    expect(getByTestId('no-error')).toBeInTheDocument()
  })
})
