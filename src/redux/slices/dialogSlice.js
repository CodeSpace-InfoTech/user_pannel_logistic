import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  dialogueData: null,
  dialogType: null, 
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openDialog: (state, action) => {
      state.isOpen = true;
      state.dialogueData = action.payload.data;
      state.dialogType = action.payload.type; 
    },
    closeDialog: (state) => {
      state.isOpen = false;
      state.dialogueData = null;
      state.dialogType = null; // Reset the dialog type
    },
  },
});

export const { openDialog, closeDialog } = dialogSlice.actions;
export default dialogSlice.reducer;