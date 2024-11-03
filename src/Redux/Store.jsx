import { configureStore } from '@reduxjs/toolkit'
import { getproductreducer } from './Slice'

export const store = configureStore({
  reducer: {
    products:getproductreducer
  },
})
