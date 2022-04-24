import {configureStore} from '@reduxjs/toolkit';
import fendiReducer from './features/fendiSlice';
import carouselReducer from './features/carouselSlice';

export const store = configureStore({
	reducer: {
		products: fendiReducer,
		carousel: carouselReducer
	},

})

