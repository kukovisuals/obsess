import {  createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}
const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    moveTo: (state, {payload}) => {
      state.value = Number(payload)
    }
  },
})

export const { moveTo} = carouselSlice.actions

export default carouselSlice.reducer
