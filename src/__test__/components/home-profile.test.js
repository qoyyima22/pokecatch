import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Profile from '../../components/home-profile'
import { MemoryRouter } from 'react-router-dom'
import mockImg from '../../assets/img/poke-test.png'
import { Provider } from '../../context'
import store from 'store'

afterEach(cleanup)

const RenderProfile = () => {
  store.get = jest.fn(() => dataStore)
  return (
    <Provider>
      <Profile />
    </Provider>
  )
}

const RenderProfileWithoutOwned = () => {
  store.get = jest.fn(() => [])
  return (
    <Provider>
      <Profile />
    </Provider>
  )
}

describe('This will test Profile Component', () => {
  test('renders Profile without crash', () => {
    render(<RenderProfile />, { wrapper: MemoryRouter })
  })
  test('renders Profile without crash', () => {
    render(<RenderProfileWithoutOwned />, { wrapper: MemoryRouter })
  })
})

const dataStore = [
  {
    name: 'bulbasaur',
    nick: 'bulbasaur',
    img: mockImg,
  },
]
