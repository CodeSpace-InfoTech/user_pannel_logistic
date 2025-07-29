import { createSlice } from "@reduxjs/toolkit";
import { getTimeLogs } from "../timeLog";


const timelogSlice = createSlice({
  name: "timelogs",
  initialState: {
    timelogs: [],
    totalTimelogs: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTimeLogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTimeLogs.fulfilled, (state, action) => {
        state.loading = false;
        state.timelogs = action.payload.data;
        state.totalTimelogs = action.payload.total;
        console.log('TimeLogs fetched successfully:', action.payload.data);
      })
      .addCase(getTimeLogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default timelogSlice.reducer;
