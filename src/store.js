// store.js
import { configureStore } from "@reduxjs/toolkit";
import avReducer from "./avSlice";
import venueReducer from "./venueSlice";

export default configureStore({
	reducer: {
		venue: venueReducer,
		av: avReducer,
	},
});
