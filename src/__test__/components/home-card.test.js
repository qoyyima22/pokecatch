import React from 'react'
import { render, cleanup } from '@testing-library/react'
import HomeCard from '../../components/home-card.js'
import { MemoryRouter } from 'react-router-dom'
import mockImg from '../../assets/img/poke-test.png'
import { Provider } from '../../context'
import store from 'store'

afterEach(cleanup)

const RenderHomeCard = () => {
  store.get = jest.fn(() => dataStore)
  return (
    <Provider>
      <HomeCard i={1} name={'bulbasaur'} image={mockImg} />
    </Provider>
  )
}
const RenderHomeCardWithoutOwned = () => {
  store.get = jest.fn(() => [])
  return (
    <Provider>
      <HomeCard i={1} name={'bulbasaur'} image={mockImg} />
    </Provider>
  )
}

describe('This will test HomeCard Component', () => {
  test('renders HomeCard with owned.length', () => {
    render(<RenderHomeCard />, { wrapper: MemoryRouter })
  })
  test('renders HomeCard without owned.length', () => {
    render(<RenderHomeCardWithoutOwned />, { wrapper: MemoryRouter })
  })
})

const dataStore = [
  {
    name: 'bulbasaur',
    nick: 'bulbasaur',
    img: mockImg,
  },
]
