import { createSlice } from "@reduxjs/toolkit";

// Slice for Counter component
const counterSlice = createSlice({
    // predefined keys - slice name : 'name'  ,for state:  'initialState'
    // initial state and value 
    name:'counter',
    initialState:{
        count:0
    },
    
    reducers:{
        // Actions - 3  ,value given as calllback
        // count can be accessed using state -predefined key
        increment:(state)=>{
            state.count += 1
        },
        decrement:(state)=>{
            state.count -= 1
        },
        reset:(state)=>{
            state.count = 0
        },
        incrementByAmount:(state,action)=>{
            state.count += action.payload
        }
    }
})

// exporting 3 Actions from counterSlice actions
export const {increment,decrement,reset,incrementByAmount} = counterSlice.actions
export default counterSlice.reducer