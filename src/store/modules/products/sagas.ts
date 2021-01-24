import { all, takeLatest, call, put } from 'redux-saga/effects'
import api from '../../../services/api'
import { AxiosResponse } from 'axios'
import {
  ADD_SUCCESSFUL,
  DELETE_SUCCESSFUL,
  FETCH_SUCCESSFUL,
  ProductsTypes,
  UPDATE_SUCCESSFUL
} from './types'
import {
  addFailed,
  addRequest,
  addSuccessful,
  deleteFailed,
  deleteRequest,
  deleteSuccessful,
  fetchFailed,
  fetchSuccessful,
  updateFailed,
  updateRequest,
  updateSuccessful
} from './actions'

type FetchResponse = AxiosResponse<FETCH_SUCCESSFUL['payload']['products']>

type AddResponse = AxiosResponse<ADD_SUCCESSFUL['payload']['product']>

type UpdateResponse = AxiosResponse<UPDATE_SUCCESSFUL['payload']['product']>

type DeleteResponse = AxiosResponse<DELETE_SUCCESSFUL['payload']['_id']>

function* fetch() {
  try {
    const response: FetchResponse = yield call(api.get, '/products')

    yield put(fetchSuccessful({ products: response.data }))
  } catch (error) {
    const errorMessage = error.response.data.error

    yield put(fetchFailed({ error: errorMessage }))
  }
}

function* add({ payload }: ReturnType<typeof addRequest>) {
  try {
    const response: AddResponse = yield call(
      api.post,
      '/products',
      payload.product
    )

    yield put(addSuccessful({ product: response.data }))
  } catch (error) {
    const errorMessage = error.response.data.error

    yield put(addFailed({ error: errorMessage }))
  }
}

function* update({ payload }: ReturnType<typeof updateRequest>) {
  const { id, product } = payload

  try {
    const response: UpdateResponse = yield call(
      api.put,
      `/products/${id}`,
      product
    )

    yield put(updateSuccessful({ product: response.data }))
  } catch (error) {
    const errorMessage = error.response.data.error

    yield put(updateFailed({ error: errorMessage }))
  }
}

function* deleteReq({ payload }: ReturnType<typeof deleteRequest>) {
  const { id } = payload

  try {
    const response: DeleteResponse = yield call(api.delete, `/products/${id}`)

    yield put(deleteSuccessful({ _id: response.data }))
  } catch (error) {
    const errorMessage = error.response.data.error

    yield put(deleteFailed({ error: errorMessage }))
  }
}

export default all([
  takeLatest(ProductsTypes.FETCH_REQUEST, fetch),
  takeLatest(ProductsTypes.ADD_REQUEST, add),
  takeLatest(ProductsTypes.UPDATE_REQUEST, update),
  takeLatest(ProductsTypes.DELETE_REQUEST, deleteReq)
])
