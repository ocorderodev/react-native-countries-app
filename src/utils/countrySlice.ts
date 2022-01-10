import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountryState } from '../interfaces/CountryState';

const initialState: CountryState = {
  value: [],
  search : false,
  countries : []
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    _getCountries: (state, data : PayloadAction<any>) => {
      state.value = data.payload;
      state.countries = data.payload;
    },
    _searchCountries: (state, data : PayloadAction<any>) => {
      state.search = true;
      state.value = data.payload;
    },
    _restoreCountries: (state) => {
      state.search = false;
      state.value = state.countries;
    }
  }
});

export const {
  _getCountries,
  _searchCountries,
  _restoreCountries
} = countrySlice.actions;

export default countrySlice.reducer;