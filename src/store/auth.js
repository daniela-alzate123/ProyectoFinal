import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLogout: false,
    userLogged: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsLogout: (state) => {
            state.isLogout = !state.isLogout
        },
        setUserLogged: (state, action) => {
            state.userLogged = action.payload;
        },
        updateUser: (state, action) => {
            state.userLogged = action.payload;
        },
    }
})

export const {setIsLogout, setUserLogged, updateUser} = authSlice.actions