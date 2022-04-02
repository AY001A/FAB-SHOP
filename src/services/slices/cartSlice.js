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
            const nextProductsItems = state.products.filter(
                (product) => product.productId !== action.payload.productId
            );

            state.products = nextProductsItems;
        }, 

        decreaseCart(state, action){
            const productIndex = state.products.findIndex(
                product => product.productId === action.payload.productId
            )

            if(state.products[productIndex].cartQuantity > 1){
                state.products[productIndex].cartQuantity -= 1;
            } else if (state.products[productIndex].cartQuantity === 1){
                const nextProductsItems = state.products.filter(
                    (product) => product.productId !== action.payload.productId
                );

                state.products = nextProductsItems;
            }
        },

        clearCart(state, action){
            state.products = [];
        },

        getTotals(state, action){
            let {total, quantity} = state.products.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;

                    cartTotal.total += itemTotal
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );

            state.cartQuantity = quantity;
            state.totalPrice = total;
        }
        

    }

})

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } = cartSlice.actions;

export default cartSlice.reducer;