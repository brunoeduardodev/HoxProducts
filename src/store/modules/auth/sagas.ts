import { all, takeLatest, call, put } from 'redux-saga/effects'
import api from '../../../services/api'
import { signInFailed, signInRequest, signInSucessful } from './actions'
import { AuthTypes, SIGN_IN_SUCCESSFUL } from './types'
import { AxiosResponse } from 'axios'

type AuthResponse = AxiosResponse<SIGN_IN_SUCCESSFUL['payload']>

function* signIn({ payload }: ReturnType<typeof signInRequest>) {
  const { email, password } = payload

  try {
    const response: AuthResponse = yield call(api.post, 'authenticate', {
      email,
      password
    })

    yield put(signInSucessful({ token: response.data.token }))
  } catch (error) {
    const errorMessage = error.response.data.error

    yield put(signInFailed({ error: errorMessage }))
  }
}

export default all([takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn)])
