import { configureStore } from '@reduxjs/toolkit'
import blogz from './auth'

const store = configureStore({
    reducer: {
        auth : blogz,

    },
})

export default store