import { combineReducers } from 'redux'

import auth from './auth/reducer'
import products from './products/reducer'

export default combineReducers({ auth, products })
