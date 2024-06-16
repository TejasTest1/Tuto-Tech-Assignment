import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    data: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemExist = state.data.find(item => item.id === action.payload.id);

            if(!itemExist) {
                state.data.push({...action.payload})
                alert('Added To Cart')
            } else {
                alert('Item Already in cart')
            }

        },
        removeFromCart: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload.id)
        }
    }
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;