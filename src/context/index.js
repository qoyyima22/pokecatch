import React from 'react'
import store from 'store'

const Context = React.createContext()

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_OWNED': {
      const temp = [...state.owned, action.data]
      store.set('owned', temp)
      return { owned: temp }
    }
    case 'REMOVE_OWNED': {
      const temp = state.owned.filter((el) => el.nick !== action.nick)
      store.set('owned', temp)
      return { owned: temp }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function Provider({ children }) {
  const owned = store.get('owned') || []
  const [state, dispatch] = React.useReducer(reducer, { owned })
  const value = { state, dispatch }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

function useAppContext() {
  const context = React.useContext(Context)
  if (context === undefined) {
    throw new Error('useAppContext must be used within a Provider')
  }
  return context
}
export { Provider, useAppContext }
