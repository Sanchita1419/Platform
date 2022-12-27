
const { createSlice } = require("@reduxjs/toolkit")


const initialDataState = {
    hasImage: false,
    image: ''
}

const dataSlice = createSlice({
    name: "data",
    initialState: initialDataState,
    reducers:{
        setImage(state, action) {
            state.hasImage= true;
            state.image=action.payload;
        },
        resetImage(state) {
            state.hasImage= false;
            state.image=null;
        }
    }
});
export const dataActions = dataSlice.actions;
export default dataSlice.reducer