import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userConfig: { logged: false, experiencia: 0, aciertos: 0, trofeos: 0, fallos: 0, coronas: 1, cartas: [] },
};

const userConfigSlice = createSlice({
  name: "aplicationConfig",
  initialState,
  reducers: {
    setUserConfig: (state, action) => {
      state.userConfig = action.payload;
      localStorage.setItem("userConfig", JSON.stringify(action.payload));
    },
  },
});

export const { setUserConfig } = userConfigSlice.actions;
export default userConfigSlice.reducer;
