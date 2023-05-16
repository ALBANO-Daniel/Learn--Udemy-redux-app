import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  //DEVELOPMENT ONLY!!!
  await pause(1000);

  return response.data;
});

  //DEVELOPMENT ONLY!!!
  const pause = (duration) => {
    return new Promise((resolve) => {
      setTimeout(resolve,duration);
    })
  }

// auto generated props
// fetchUsers.pending === 'users/fetch/peding'
// fetchUsers.fulfilled === 'users/fetch/fulfilled'
// fetchUsers.rejected === 'users/fetch/rejected'

export { fetchUsers };
