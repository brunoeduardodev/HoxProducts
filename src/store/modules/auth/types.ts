/* eslint-disable no-unused-vars */
export interface Auth {
  token: string
  signed: boolean
  loading: boolean
  error: string
}

export interface SIGN_IN_REQUEST {
  type: string
  payload: {
    email: string
    password: string
  }
}

export interface SIGN_IN_SUCCESSFUL {
  type: string
  payload: {
    token: string
  }
}

export interface SIGN_IN_FAILED {
  type: string
  payload: {
    error: string
  }
}

export interface SIGN_OUT {
  type: string
  payload: {}
}

export interface CLEAR_ERROR {
  type: string
  payload: {}
}

export enum AuthTypes {
  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESSFUL = '@auth/SIGN_IN_SUCCESSFUL',
  SIGN_IN_FAILED = '@auth/SIGN_IN_FAILED',
  SIGN_OUT = '@auth/SIGN_OUT',
  CLEAR_ERROR = '@auth/CLEAR_ERROR'
}

export type ActionsTypes =
  | SIGN_IN_REQUEST
  | SIGN_IN_SUCCESSFUL
  | SIGN_IN_FAILED
  | SIGN_OUT
  | CLEAR_ERROR
