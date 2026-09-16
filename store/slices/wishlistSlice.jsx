import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        userID: 1,
        wishlistItems: []
    },

    reducers: {
        addToWishlist: (state, action) => {
            console.log("action",action)
            const newProduct = {
                id: action.payload.id,
                title: action.payload.title,
                thumbnail: action.payload.thumbnail,
                price: action.payload.price
            }
            state.wishlistItems = [...state.wishlistItems, newProduct]

        },

        removeFromWishlist: (state, action) => {
            state.wishlistItems = state.wishlistItems.filter((item) => item.id !== action.payload)
        }
    }

})


export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;