import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESSFUL,
  SIGN_IN_FAILED,
  AuthTypes
} from './types'

export const signInRequest = (payload: SIGN_IN_REQUEST['payload']) => ({
  type: AuthTypes.SIGN_IN_REQUEST,
  payload
})

export const signInSucessful = (payload: SIGN_IN_SUCCESSFUL['payload']) => ({
  type: AuthTypes.SIGN_IN_SUCCESSFUL,
  payload
})

export const signInFailed = (payload: SIGN_IN_FAILED['payload']) => ({
  type: AuthTypes.SIGN_IN_FAILED,
  payload
})

export const signOut = () => ({
  type: AuthTypes.SIGN_OUT
})

export const clearError = () => ({
  type: AuthTypes.CLEAR_ERROR
})
