import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status : false,
    useData : null
}

const blogSlice = createSlice({
    name: 'auth',
    initialState,
    reducers : {
        login : (state, action) =>{
            state.status = true;
            state.useData = action.payload.userData;
        },
        logout : (state) =>{
            state.action = false,
            state.useData = null
        }
    }
})

export const {login, logout} = blogSlice.actions

export default blogSlice.reducer;