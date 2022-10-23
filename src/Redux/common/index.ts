import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface CommonState {
  isTooltipVisible: boolean;
}

const initialState: CommonState = {
  isTooltipVisible: false,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    turnOnTooltip: (state) => {
      state.isTooltipVisible = true;
    },
    turnOffTooltip: (state) => {
      state.isTooltipVisible = false;
    },
  },
});

export const { turnOnTooltip, turnOffTooltip } = commonSlice.actions;

export const isTooltipVisibleSelector = (state: RootState) =>
  state.common.isTooltipVisible;

export default commonSlice.reducer;
