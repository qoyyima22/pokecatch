import React from 'react'
import { render, cleanup } from '@testing-library/react'
import ModalContent from '../../components/mypokemons-modal-content'
import { MemoryRouter } from 'react-router-dom'

afterEach(cleanup)

const RenderModalContent = () => {
  return <ModalContent />
}

describe('This will test ModalContent Component', () => {
  test('renders ModalContent without crash', () => {
    const { getByText } = render(<RenderModalContent />, { wrapper: MemoryRouter })
    expect(getByText('You have release this pokemon to the wild world!')).toBeInTheDocument()
  })
})
