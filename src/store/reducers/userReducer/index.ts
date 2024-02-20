import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'userReducer',
    initialState: {
        value: 0,
    },
    reducers: {
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { incrementByAmount } = userSlice.actions;

export default userSlice.reducer;