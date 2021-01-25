import { all, takeLatest, call, put } from 'redux-saga/effects'
import api from '../../../services/api'
import { signInFailed, signInRequest, signInSucessful } from './actions'
import { AuthTypes, SIGN_IN_SUCCESSFUL } from './types'
import { AxiosResponse } from 'axios'
import { fetchRequest } from '../products/actions'

type AuthResponse = AxiosResponse<SIGN_IN_SUCCESSFUL['payload']>

function* signIn({ payload }: ReturnType<typeof signInRequest>) {
  const { email, password } = payload
  console.log('Chegou no sagas')
  try {
    const response: AuthResponse = yield call(api.post, 'authenticate', {
      email,
      password
    })

    yield put(signInSucessful({ token: response.data.token }))
    api.defaults.headers.authorization = response.data.token
    yield put(fetchRequest({}))
  } catch (error) {
    const errorMessage = error.response.data.error

    yield put(signInFailed({ error: errorMessage }))
  }
}

export default all([takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn)])
