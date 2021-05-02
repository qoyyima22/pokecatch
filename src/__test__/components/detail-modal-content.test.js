import React from 'react'
import { render, cleanup, fireEvent, screen } from '@testing-library/react'
import ModalContent from '../../components/detail-modal-content.js'
import { MemoryRouter } from 'react-router-dom'
import PokeImg from '../../assets/img/poke-test.png'
import { Provider } from '../../context'

afterEach(cleanup)

const RenderModalContent = () => {
  return (
    <Provider>
      <ModalContent isCatched={true} name="poke-test" setIsCatched={() => {}} img={PokeImg} />
    </Provider>
  )
}

const RenderModalContentCatchedFalse = () => {
  return (
    <Provider>
      <ModalContent isCatched={false} name="poke-test" setIsCatched={() => {}} img={PokeImg} />
    </Provider>
  )
}

describe('This will test ModalContent Component', () => {
  test('renders ModalContent condition isCatched and !added without crash', () => {
    const { getByTestId } = render(<RenderModalContent />, { wrapper: MemoryRouter })
    expect(getByTestId('success-catch')).toBeInTheDocument()
    fireEvent.change(screen.getByTestId('nick-input'), { target: { value: 'bulbasaur' } })
    fireEvent.submit(screen.getByTestId('nick-form'))
    expect(getByTestId('success-added')).toBeInTheDocument()
  })
  test('renders ModalContent condition !isCatched and !added without crash', () => {
    render(<RenderModalContentCatchedFalse />, { wrapper: MemoryRouter })
  })
})
