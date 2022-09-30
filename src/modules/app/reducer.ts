import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AppStateType {
  data: any;
}

const initialState: AppStateType = {
  data: null,
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateState: (state, action: PayloadAction<any>) => {},
  },
});

export const { updateState } = slice.actions;

export default slice.reducer;
