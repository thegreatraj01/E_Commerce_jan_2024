import { createSlice ,createSelector  } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cart.find(item => item._id === newItem._id);
            if (existingItem) {
                // If item exists in cart, increment its count
                existingItem.count += 1;
            } else {
                // If item doesn't exist in cart, add it with count 1
                newItem.count = 1;
                state.cart.push(newItem);
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item._id !== action.payload);
        },
        decreaseItemCount: (state, action) => {
            const itemToDecrease = state.cart.find(item => item._id === action.payload);
            if (itemToDecrease && itemToDecrease.count > 1) {
                // If item exists and count is greater than 1, decrease count by 1
                itemToDecrease.count -= 1;
            }
        },
    },
});
export const { addToCart, removeFromCart, decreaseItemCount } = cartSlice.actions;
export default cartSlice.reducer;

const selectCart = state => state.cartslice.cart;

export const totalItemInCart = createSelector(
    [selectCart],
    cart => cart.length
);

export const getTotalCartAmount = createSelector(
    [selectCart],
    (cart) => {
      return cart.reduce((total, item) => {
        return total + item.new_price * item.count;
      }, 0);
    }
  );