import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { validate } from "uuid";

const initialState = {
    name: '',
    gmail: '',
    errors: { name: '', gmail: '' },
    status: 'idle',  // idle, loading, succeeded, failed
    apiError: null,
}

// Async thunk to handle form submission via POST request
export const submitForm = createAsyncThunk(
    'form/submitForm',
    async (formData) => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
        console.log('Response:', response);
        return response.data;
    }
);

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {

        setName: (state, action) => {
            state.name = action.payload;

            // Inline validation for the name field
            if (!state.name.trim()) {
                state.errors.name = 'Name is required.';
            } else if (!/^[a-zA-Z]+$/.test(state.name)) {
                state.errors.name = 'Name must contain only letters.';
            } else {
                state.errors.name = '';  // Clear the error if valid
            }
        },
        setGmail: (state, action) => {
            state.gmail = action.payload;
        },

        validateform: (state) => {
            if (!state.name.trim()) {
                state.errors.name = 'Name is requires..'
            }
            else if (!/^[a-zA-Z]+$/.test(state.name)) {
                state.errors.name = 'Name must contain only letters';
            }
            else if (!state.gmail.trim()) {
                state.errors.gmail = "Email is required.."
            }
            else {
                state.errors.name = '';  // Clear error if valid
            }

        },
        clearForm: (state) => {
            state.name = '';
            state.gmail = '';
        },
        //extra reducers  for api calls
        extraReducers: (builder) => {
            builder
                .addCase(submitForm.pending, (state) => {
                    state.status = 'loading'; // API call is in progress
                })
                .addCase(submitForm.fulfilled, (state, action) => {
                    state.status = 'succeeded'; // API call succeeded
                    state.apiError = null; // Clear any previous error
                })
                .addCase(submitForm.rejected, (state, action) => {
                    state.status = 'failed'; // API call failed
                    state.apiError = action.error.message; // Store error message
                });
        }



    }



})
export const { setName, setGmail, clearForm, validateform, } = formSlice.actions;
export default formSlice.reducer;   