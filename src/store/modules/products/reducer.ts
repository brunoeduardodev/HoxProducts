import { Reducer } from 'react'
import {
  Products,
  ActionsTypes,
  ProductsTypes,
  FETCH_SUCCESSFUL,
  FETCH_FAILED,
  ADD_SUCCESSFUL,
  ADD_FAILED,
  UPDATE_SUCCESSFUL,
  UPDATE_FAILED,
  DELETE_SUCCESSFUL,
  DELETE_FAILED
} from './types'

const INITIAL_STATE: Products = {
  error: '',
  loading: false,
  products: []
}

const reducer: Reducer<Products, ActionsTypes> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case ProductsTypes.FETCH_REQUEST: {
      return { ...state, loading: true, error: '' }
    }

    case ProductsTypes.FETCH_SUCCESSFUL: {
      const payload = action.payload as FETCH_SUCCESSFUL['payload']
      return { ...state, loading: false, products: payload.products, error: '' }
    }

    case ProductsTypes.FETCH_FAILED: {
      const payload = action.payload as FETCH_FAILED['payload']
      return { ...state, loading: false, products: [], error: payload.error }
    }

    case ProductsTypes.ADD_REQUEST: {
      return { ...state, loading: true, error: '' }
    }

    case ProductsTypes.ADD_SUCCESSFUL: {
      const payload = action.payload as ADD_SUCCESSFUL['payload']
      const newProducts = [...state.products, payload.product]

      return { ...state, loading: false, error: '', products: newProducts }
    }

    case ProductsTypes.ADD_FAILED: {
      const payload = action.payload as ADD_FAILED['payload']

      return { ...state, loading: false, error: payload.error }
    }

    case ProductsTypes.UPDATE_REQUEST: {
      return { ...state, loading: true, error: '' }
    }

    case ProductsTypes.UPDATE_SUCCESSFUL: {
      const payload = action.payload as UPDATE_SUCCESSFUL['payload']

      const newProducts = state.products.map(product => {
        if (product._id === payload.product._id) {
          return payload.product
        }

        return product
      })

      return { ...state, loading: false, error: '', products: newProducts }
    }

    case ProductsTypes.UPDATE_FAILED: {
      const payload = action.payload as UPDATE_FAILED['payload']
      return { ...state, loading: false, error: payload.error }
    }

    case ProductsTypes.DELETE_REQUEST: {
      return { ...state, loading: true, error: '' }
    }

    case ProductsTypes.DELETE_SUCCESSFUL: {
      const payload = action.payload as DELETE_SUCCESSFUL['payload']
      const newProducts = state.products.filter(product => {
        if (product._id !== payload._id) return product
        return undefined
      })

      return { ...state, products: newProducts, error: '' }
    }

    case ProductsTypes.DELETE_FAILED: {
      const payload = action.payload as DELETE_FAILED['payload']

      return { ...state, loading: false, error: payload.error }
    }

    default:
      return state
  }
}

export default reducer
