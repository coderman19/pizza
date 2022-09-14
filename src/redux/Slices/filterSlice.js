import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'



const initialState = {
  count: 2,
  sum: 2,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + state.count
    },
    decrement: (state) => {
      state.sum = state.count + state.sum
    },
  
   
    
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})


export const { increment, decrement,  } = counterSlice.actions

export default counterSlice.reducer