import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AppStateType {
  sidebar: boolean;
}

const initialState: AppStateType = {
  sidebar: false,
};

const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateState: (state, action: PayloadAction<{ [x: string]: unknown }>) => {
      state = {
        ...state,
        ...action.payload,
      };
    },
    toggleSidebar(state) {
      state.sidebar = !state.sidebar;
    },
  },
});

export const { updateState, toggleSidebar } = actions;

export default reducer;
