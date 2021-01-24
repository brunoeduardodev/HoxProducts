import { Reducer } from 'react'

import {
  SIGN_IN_SUCCESSFUL,
  SIGN_IN_FAILED,
  AuthTypes,
  ActionsTypes,
  Auth
} from './types'

const INITIAL_STATE: Auth = {
  loading: false,
  error: '',
  signed: false,
  token: ''
}

const reducer: Reducer<Auth, ActionsTypes> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN_REQUEST: {
      return {
        loading: true,
        error: '',
        signed: false,
        token: ''
      }
    }

    case AuthTypes.SIGN_IN_SUCCESSFUL: {
      const payload = action.payload as SIGN_IN_SUCCESSFUL['payload']

      return {
        ...state,
        error: '',
        loading: false,
        signed: true,
        token: payload.token
      }
    }

    case AuthTypes.SIGN_IN_FAILED: {
      const payload = action.payload as SIGN_IN_FAILED['payload']

      return {
        ...state,
        error: payload.error,
        loading: false,
        signed: false,
        token: ''
      }
    }

    case AuthTypes.SIGN_OUT: {
      return {
        signed: false,
        loading: false,
        error: '',
        token: ''
      }
    }

    case AuthTypes.CLEAR_ERROR: {
      return {
        ...state,
        error: ''
      }
    }

    default:
      return state
  }
}

export default reducer
