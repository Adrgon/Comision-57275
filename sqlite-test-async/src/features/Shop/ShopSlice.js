import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
    name: "shop", 
    initialState: {
        value: {
            categorySelected: "",
            itemSelected: ""
        }
    }, 
    reducers: {
        setCategorySelected: (state, action)=>{
            state.value.categorySelected = action.payload;
        },
        setItemSelected: (state, {payload}) => {
            state.value.itemSelected = payload;
        }
    }
})

export const {setCategorySelected, setItemSelected} = shopSlice.actions
export default shopSlice.reducer;
