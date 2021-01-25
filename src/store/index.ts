import { createStore, Store, applyMiddleware } from 'redux'
import { Auth } from './modules/auth/types'
import createSagaMiddleware from 'redux-saga'
import { Products } from './modules/products/types'
import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSagas'
export interface ApplicationState {
  products: Products
  auth: Auth
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
