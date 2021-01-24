/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
export interface RawProduct {
  name: string
  productionDate: Date
  isPerishable: boolean
  expirationDate?: Date
  price: number
}

export interface Product extends RawProduct {
  _id: string
  created_at: string
  updated_at: string
}

export interface Products {
  products: Product[]
  loading: boolean
  error: string
}

export interface FETCH_REQUEST {
  type: string
  payload: {}
}

export interface FETCH_SUCCESSFUL {
  type: string
  payload: {
    products: Product[]
  }
}

export interface FETCH_FAILED {
  type: string
  payload: {
    error: string
  }
}

export interface ADD_REQUEST {
  type: string
  payload: {
    product: RawProduct
  }
}

export interface ADD_SUCCESSFUL {
  type: string
  payload: {
    product: Product
  }
}

export interface ADD_FAILED {
  type: string
  payload: {
    error: string
  }
}

export interface UPDATE_REQUEST {
  type: string
  payload: {
    id: string
    product: RawProduct
  }
}

export interface UPDATE_SUCCESSFUL {
  type: string
  payload: {
    product: Product
  }
}

export interface UPDATE_FAILED {
  type: string
  payload: {
    error: string
  }
}

export interface DELETE_REQUEST {
  type: string
  payload: {
    id: string
  }
}

export interface DELETE_SUCCESSFUL {
  type: string
  payload: {
    _id: string
  }
}

export interface DELETE_FAILED {
  type: string
  payload: {
    error: string
  }
}

export enum ProductsTypes {
  FETCH_REQUEST = '@products/FETCH_REQUEST',
  FETCH_SUCCESSFUL = '@products/FETCH_SUCCESSFUL',
  FETCH_FAILED = '@products/FETCH_FAILED',
  ADD_REQUEST = '@products/ADD_REQUEST',
  ADD_SUCCESSFUL = '@products/ADD_SUCCESSFUL',
  ADD_FAILED = '@products/ADD_FAILED',
  UPDATE_REQUEST = '@products/UPDATE_REQUEST',
  UPDATE_SUCCESSFUL = '@products/FETCH_REQUEST',
  UPDATE_FAILED = '@products/UPDATE_FAILED',
  DELETE_REQUEST = '@products/DELETE_REQUEST',
  DELETE_SUCCESSFUL = '@products/DELETE_SUCCESSFUL',
  DELETE_FAILED = '@products/DELETE_FAILED'
}

export type ActionsTypes =
  | FETCH_REQUEST
  | FETCH_SUCCESSFUL
  | FETCH_FAILED
  | ADD_REQUEST
  | ADD_SUCCESSFUL
  | ADD_FAILED
  | UPDATE_REQUEST
  | UPDATE_SUCCESSFUL
  | UPDATE_FAILED
  | DELETE_REQUEST
  | DELETE_SUCCESSFUL
  | DELETE_FAILED
