import getApiUrl from "../../utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHelloWorld = createAsyncThunk(
  "helloWorld/fetchHelloWorld",
  async () => {
    const { data } = await axios.get(`${getApiUrl()}/api/hello-world`);
    return data;
  }
);
