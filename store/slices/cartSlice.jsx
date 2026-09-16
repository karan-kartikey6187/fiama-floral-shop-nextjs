import { createSlice } from "@reduxjs/toolkit";
const calculateCart = (state) => {
    state.totalQuantities = state.cartItems.reduce((total, item) => total + item.quantity, 0)
    state.subTotal = state.cartItems.reduce((total, item) => total + item.totalPrice, 0)
    state.taxAmount = (state.subTotal * state.tax) / 100
    state.discount = (state.subTotal * state.discountPercent) / 100
    state.orderTotal = state.subTotal + state.shippingCost + state.taxAmount - state.discount
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        userID: 1,
        cartItems: [],
        totalQuantities: 0,
        subTotal: 0,
        shippingCost: 100,
        tax: 10,
        taxAmount: 0,
        appliedCoupon: '',
        discountPercent: 0,
        discount: 0,
        orderTotal: 0,
        couponCodes: [
            { code: "DIS5", percent: 5 },
            { code: "DIS10", percent: 10 },
        ]

    },
    reducers: {

        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice =
                    existingItem.quantity * existingItem.price;
            } else {
                const newProduct = {
                    id: action.payload.id,
                    title: action.payload.title,
                    thumbnail: action.payload.thumbnail,
                    price: action.payload.price,
                    quantity: 1,
                    totalPrice: action.payload.price
                };

                state.cartItems = [...state.cartItems, newProduct];
            }
            calculateCart(state);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
            calculateCart(state)
        },
        updateCart: (state, action) => {
            const index = state.cartItems.findIndex((item) => item.id === action.payload.id)
            state.cartItems[index].quantity = action.payload.quantity
            state.cartItems[index].totalPrice = action.payload.quantity * state.cartItems[index].price
            calculateCart(state)
        },
        applyCoupon: (state, action) => {
            const couponInfo = state.couponCodes.find((item) => item.code === action.payload)
            state.appliedCoupon = couponInfo.code
            state.discountPercent = couponInfo.percent
            calculateCart(state)
        },
        removeCoupon: (state, action) => {
            state.appliedCoupon = ''
            state.discountPercent = 0
            calculateCart(state)
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.totalQuantities = 0;
            state.subTotal = 0;
            state.taxAmount = 0;
            state.discount = 0;
            state.orderTotal = 0;
            state.appliedCoupon = '';
            state.discountPercent = 0;
        }
    }
})

export const { addToCart, removeFromCart, updateCart, applyCoupon, removeCoupon, clearCart } = cartSlice.actions;
export default cartSlice.reducer;