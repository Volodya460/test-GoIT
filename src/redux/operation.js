import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64551ef1a74f994b3352b7a0.mockapi.io";

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/users/?page=${page}&&limit=2`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateFollowers = createAsyncThunk(
  "user/addFollowers",
  async (text, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${text[0]}`, {
        followers: text[1],
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
