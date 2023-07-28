import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import firebase from 'firebase/app';
import { User } from 'firebase/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

type UserState = User | null;


const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in.
  } else {
    // User is signed out.
  }
});



interface State {
  user: UserState;
}

const initialState: State = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: State) => state.user;

export default userSlice.reducer;
