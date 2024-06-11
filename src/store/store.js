import { configureStore } from '@reduxjs/toolkit'
import textReducer from './textSlice/textSlice'

export default configureStore({
  reducer: {
    texts: textReducer
  },
})