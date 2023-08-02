const { createSlice } = require('@reduxjs/toolkit');

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
        name : "Guest"
    }, // Initialize user as null
  },
  reducers: {
    addUser(state, action) {
      state.user = action.payload; // Set the user login info in the state
    },
    clearState(state) {
        state.user.name = "Guest";
      },
  },
});

export const { clearState,addUser } = userSlice.actions;
export default userSlice.reducer;
