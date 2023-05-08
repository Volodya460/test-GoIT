import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./operation";
import { updateFollowers } from "./operation";
import { toast } from "react-toastify";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    firstLoading: false,
    showButton: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.firstLoading = true;
        state.items = state.items.concat(action.payload);
        if (action.payload.length < 3) {
          toast.info("This is the end");
          state.showButton = true;
        }
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(updateFollowers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateFollowers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const { id, followers } = action.payload;
        const userIndex = state.items.findIndex((user) => user.id === id);
        if (userIndex !== -1) {
          state.items[userIndex].followers = followers;
        }
      })

      .addCase(updateFollowers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
  reducers: {
    buttunMore: (state) => {
      state.firstLoading = false;
    },
  },
});

export const { buttunMore } = userSlice.actions;

export const getUserInf = (state) => state.user.items;
export const getFierstLoading = (state) => state.user.firstLoading;
export const getshowButton = (state) => state.user.showButton;
export const getIsLoading = (state) => state.user.isLoading;
