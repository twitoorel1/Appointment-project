import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { removeCookie, setCookie } from "@/utils/cookies";
import {
  register,
  login,
  isLogin,
  logout,
} from "@/services/authentication.service";
import { redirect } from "next/dist/server/api-utils";

export const registerByPayload = createAsyncThunk(
  "authentication/registerByPayload",
  async (values) => {
    const response = await register(values);
    return response;
  }
);

export const loginByPayload = createAsyncThunk(
  "authentication/loginByPayload",
  async (values) => {
    const response = await login(values);
    return response;
  }
);

export const isLoginByToken = createAsyncThunk(
  "auth/isLoginByToken",
  async () => {
    const data = await isLogin();
    return data;
  }
);

export const logoutByToken = createAsyncThunk(
  "auth/logoutByToken",
  async (values) => {
    const response = await logout(values);
    redirect("/login");
    console.log(response)
    return response;
  }
);

const initialState = {
  isAuthenticated: null,
  isLoading: false,
  isRegister: false,
  isError: null,
  error: "",
  user: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetErrors: (state) => {
      setTimeout(() => {
        state.isError = false;
        state.error = "";
      }, 6000);
    },
    setIsLogin: (state, { payload }) => {
      state.isAuthenticated = payload.isAuthenticated;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle Register
      .addCase(registerByPayload.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerByPayload.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.isError = true;
      })
      .addCase(registerByPayload.fulfilled, (state) => {
        state.isLoading = false;
        state.error = "";
        state.isError = false;
      })

      // Handle Login
      .addCase(loginByPayload.pending, (state, action) => {
        state.isLoading = true;
        state.error = "";
        state.isError = null;
      })
      .addCase(loginByPayload.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.isError = true;
      })
      .addCase(loginByPayload.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isRegister = true;
        state.error = "";
        state.isError = false;
        state.isAuthenticated = true;
        state.user = payload.data;
        setCookie("ac-token", payload.token);
      })

      // Handle isLogin?
      .addCase(isLoginByToken.pending, (state, action) => {
        // state.isLoading = true;
        state.isError = null;
        state.error = "";
      })
      .addCase(isLoginByToken.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(isLoginByToken.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = null;
        state.isRegister = true;
        state.error = "";
        state.user = payload.user;
        state.isAuthenticated = payload.isAuthenticated;
      })

      // Handle Logout
      .addCase(logoutByToken.pending, (state, action) => {
        state.isLoading = true;
        state.isError = null;
        state.error = "";
      })
      .addCase(logoutByToken.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.user = null;
        state.isAuthenticated = false;
        removeCookie("ac-token", { path: "/" });
      })
      .addCase(logoutByToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isRegister = false;
        state.isAuthenticated = false;
        state.error = "התנתקת בהצלחה";
        state.user = null;
        removeCookie("ac-token", { path: "/" });
      });
  },
});

export const { resetErrors, setIsLogin } = authSlice.actions;
export default authSlice.reducer;
