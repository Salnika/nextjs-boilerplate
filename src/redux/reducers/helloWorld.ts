import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchHelloWorld } from "../actions/helloWorld";

interface HelloWorldState {
  value: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: HelloWorldState = {
  value: "",
  status: "idle",
  error: null,
};

const helloWorldSlice = createSlice({
  name: "helloWorld",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHelloWorld.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchHelloWorld.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.status = "succeeded";
          state.value = action.payload;
        }
      )
      .addCase(fetchHelloWorld.rejected, (state) => {
        state.status = "failed";
        state.error = state.status;
      });
  },
});

export default helloWorldSlice.reducer;
