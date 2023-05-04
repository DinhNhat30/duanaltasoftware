// Showpassword.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ShowPasswordState {
  showPassword: boolean;
}

const initialState: ShowPasswordState = {
  showPassword: false,
};

export const showPasswordSlice = createSlice({
  name: 'showPassword',
  initialState,
  reducers: {
    setShowPassword: (state, action: PayloadAction<boolean>) => {
      state.showPassword = action.payload;
    },
  },
});

export const { setShowPassword } = showPasswordSlice.actions;
export const showPasswordReducer = showPasswordSlice.reducer;
