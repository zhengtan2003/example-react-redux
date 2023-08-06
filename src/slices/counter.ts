import {createSlice} from '@reduxjs/toolkit'

export type CounterState = {
    value: number
}
const initialState: CounterState = {
    value: 0,
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    },
})