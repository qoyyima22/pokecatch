import React from 'react'
import { render, cleanup, fireEvent, screen } from '@testing-library/react'
import Modal from '../../components/base-modal.js'
import { MemoryRouter } from 'react-router-dom'

afterEach(cleanup)

const RenderModal = () => {
  return (
    <Modal show={true} close={() => alert('close')} closable={true}>
      Children
    </Modal>
  )
}

const RenderModalUnClosable = () => {
  return (
    <Modal show={true} closable={false}>
      Children
    </Modal>
  )
}
const RenderModalClosed = () => {
  return (
    <Modal show={false} closable>
      Children
    </Modal>
  )
}

describe('This will test Modal Component', () => {
  test('renders modal', () => {
    const { getByText } = render(<RenderModal />, { wrapper: MemoryRouter })

    expect(getByText('Children')).toBeInTheDocument()
  })
  test('renders modal unclosable not crash', () => {
    render(<RenderModalUnClosable />, { wrapper: MemoryRouter })

    fireEvent.click(screen.getByTestId('modal-outer'))
  })
  test('renders closed modal not crashed', () => {
    render(<RenderModalClosed />, { wrapper: MemoryRouter })
  })
})
