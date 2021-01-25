import { all } from 'redux-saga/effects'

import auth from './auth/sagas'
import products from './products/sagas'

export default function* rootSaga() {
  yield all([auth, products])
}
