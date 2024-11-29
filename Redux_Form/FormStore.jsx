import { configureStore } from "@reduxjs/toolkit";
import myformReducer from './FormSlice'
const FormStore = configureStore({
    reducer: {
        form: myformReducer,
    },
})
export default FormStore;