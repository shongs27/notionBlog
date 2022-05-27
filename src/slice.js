import { createSlice } from '@reduxjs/toolkit';

// import { fetchRegions } from './services/api';

const initialState = {
  regions: [],
};

const reducers = {
  setRegions: (state, { payload: regions }) => ({ ...state, regions }),
};

const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers,
});

export const {} = actions;

export default reducer;
