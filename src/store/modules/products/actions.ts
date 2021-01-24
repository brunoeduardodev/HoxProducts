import {
  FETCH_REQUEST,
  FETCH_SUCCESSFUL,
  FETCH_FAILED,
  ADD_REQUEST,
  ADD_SUCCESSFUL,
  ADD_FAILED,
  UPDATE_REQUEST,
  UPDATE_SUCCESSFUL,
  UPDATE_FAILED,
  DELETE_REQUEST,
  DELETE_SUCCESSFUL,
  DELETE_FAILED,
  ProductsTypes
} from './types'

export const fetchRequest = (payload: FETCH_REQUEST['payload']) => ({
  type: ProductsTypes.FETCH_REQUEST,
  payload
})

export const fetchSuccessful = (payload: FETCH_SUCCESSFUL['payload']) => ({
  type: ProductsTypes.FETCH_SUCCESSFUL,
  payload
})

export const fetchFailed = (payload: FETCH_FAILED['payload']) => ({
  type: ProductsTypes.FETCH_FAILED,
  payload
})

export const addRequest = (payload: ADD_REQUEST['payload']) => ({
  type: ProductsTypes.ADD_REQUEST,
  payload
})

export const addSuccessful = (payload: ADD_SUCCESSFUL['payload']) => ({
  type: ProductsTypes.ADD_SUCCESSFUL,
  payload
})

export const addFailed = (payload: ADD_FAILED['payload']) => ({
  type: ProductsTypes.ADD_FAILED,
  payload
})

export const updateRequest = (payload: UPDATE_REQUEST['payload']) => ({
  type: ProductsTypes.UPDATE_REQUEST,
  payload
})

export const updateSuccessful = (payload: UPDATE_SUCCESSFUL['payload']) => ({
  type: ProductsTypes.UPDATE_SUCCESSFUL,
  payload
})

export const updateFailed = (payload: UPDATE_FAILED['payload']) => ({
  type: ProductsTypes.UPDATE_FAILED,
  payload
})

export const deleteRequest = (payload: DELETE_REQUEST['payload']) => ({
  type: ProductsTypes.DELETE_REQUEST,
  payload
})

export const deleteSuccessful = (payload: DELETE_SUCCESSFUL['payload']) => ({
  type: ProductsTypes.DELETE_SUCCESSFUL,
  payload
})

export const deleteFailed = (payload: DELETE_FAILED['payload']) => ({
  type: ProductsTypes.DELETE_FAILED,
  payload
})
