import { createSlice } from "@reduxjs/toolkit";

export const sliceReducer=createSlice({
    name:"leaveMangment",
    initialState:{
        isHOD:null,
        isStaff:null
    },
    reducers: {
        handleisHOD:(state,action)=>{
            state.isHOD=action.payload
        },
        handleisStaff:(state,action)=>{
            state.isStaff= action.payload
        }
    }
})

export const {handleisHOD,handleisStaff} =sliceReducer.actions

export default sliceReducer