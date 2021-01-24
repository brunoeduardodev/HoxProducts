import { createStore, Store } from 'redux'
import { Auth } from './modules/auth/types'
import { Products } from './modules/products/types'
import rootReducer from './modules/rootReducer'
export interface ApplicationState {
  products: Products
  auth: Auth
}

const store: Store<ApplicationState> = createStore(rootReducer)

export default store
