import { createSlice } from '@reduxjs/toolkit';
import { fecthBaseCurrency } from './operations';

const initialState = {
  baseCurrency: '',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder =>
    builder.addCase(fecthBaseCurrency.fulfilled, (state, action) => {
      state.baseCurrency = action.payload;
    }),
  //   .addCase(fecthBaseCurrency.rejected, state => {
  //     state.baseCurrency = 'USD';
  //   }),
});
export const { setBaseCurrency } = currencySlice.actions;

export const currencyReducer = currencySlice.reducer;
