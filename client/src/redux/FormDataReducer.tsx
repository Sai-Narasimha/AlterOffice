import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormDataState {
  value: number;
}

const initialState: FormDataState = {
  value: 0,
};

export const FormDataReducer = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setValue } = FormDataReducer.actions;

export default FormDataReducer.reducer;
