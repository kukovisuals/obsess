// import {useCallBack} from 'react';
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const initialState = {
  loading: false,
  hasErrors: false,
  products: []
}
const fendiSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: state => {
      state.loading = true
    },
    getProductsSuccess: (state, {payload}) => {
      state.products = payload
      state.loading = false
      state.hasErrors = false
    }, 
    getProductsFail: state => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

export const { getProducts, getProductsSuccess, getProductsFail} = fendiSlice.actions

export const prodcutsSelector = (state) => state.products

export default fendiSlice.reducer

export function fetchFendi() {
  return async dispatch => {
    dispatch(getProducts())
    try {
      const res = await axios.get('https://fakestoreapi.com/products?limit=10')
      console.log(res)
      const {data: response} = await res
      dispatch(getProductsSuccess(response))      // Here, delve one layer deeper.
    } catch (error) {
      dispatch(getProductsFail())
    }
  }
}