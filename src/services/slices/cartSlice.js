import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products : [],
    cartQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const productIndex = state.products.findIndex(
                (product) => product.productId === action.payload.productId
            );
            if (productIndex >= 0) {
                state.products[productIndex].cartQuantity += 1;
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1};
                state.products.push(tempProduct);
            }
            
        }, 

        removeFromCart(state, action) {
            const newProductsItems = state.products.filter(
                (product) => product.productId !== action.payload.productId
            );

            state.products = newProductsItems;
        }

    }

})

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;