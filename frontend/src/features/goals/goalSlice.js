import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import goalService from "./goalService";

const initialState = {
  isError: null,
  isSuccess: false,
  isLoading: false,
  message: "",
  goals: [],
};

export const createGoal = createAsyncThunk(
  "goals/createGoal",
  async (goalData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await goalService.createGoal(goalData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getGoals = createAsyncThunk(
  "goals/getGoals",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await goalService.getGoals(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { isLoading } = getState().goal;
      if (isLoading) {
        return false;
      }
    },
  }
);

const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createGoal.pending, (state, action) => {
        state.error = null;
      })
      .addCase(createGoal.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(createGoal.fulfilled, (state, action) => {
        state.goals.push(action.payload);
      })
      .addCase(getGoals.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(getGoals.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(getGoals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.goals = action.payload;
      });
  },
});

export const {} = goalSlice.actions;
export default goalSlice.reducer;
