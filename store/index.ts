import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const bindMiddleware = (middleware: any) => {
  return applyMiddleware(...middleware)
}

export const makeStore = (context: any) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]))

  sagaMiddleware.run(rootSaga)

  return store
}

export default createWrapper(makeStore, { debug: true })
