import { getCookie } from "@/utils/cookies";
import axios from "axios";
import { useRouter } from "next/router";

const api = axios.create({
  baseURL: "http://localhost:4000/auth/",
  headers: { "Content-Type": "application/json" },
});

export async function register(formValue) {
  try {
    const { data } = await api.post("register", formValue);
    return data;
  } catch (error) {
    console.log("Error: Service => Register");
    console.log(error.message);
    return Promise.reject(error.response?.data?.message);
  }
}

export async function login(formValue) {
  try {
    const { data } = await api.post("login", formValue);
    // console.log("Data Login: ", data);
    return data;
  } catch (error) {
    console.log("Error: Service => Login");
    return Promise.reject(
      error.response?.data?.message || error.message || "Server Error"
    );
  }
}

export async function isLogin() {
  try {
    const token = await getCookie("ac-token");
    if (!token) Promise.reject();
    const response = await api.post("isLogin", { token });
    return response.data;
  } catch (error) {
    console.log("Error: Service => isLogin");
    return Promise.reject(
      error.response?.data?.message || error.message || "Server Error"
    );
  }
}

export async function logout(userId) {
  try {
    const token = getCookie("ac-token");
    if (!token) Promise.reject();
    const response = await api.post(`logout/${userId}`, { token });

    return response.data;
  } catch (error) {
    return Promise.reject(
      error.response?.data?.message || error.message || "Server Error"
    );
  }
}
