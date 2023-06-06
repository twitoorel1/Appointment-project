import React from "react";
import AuthLayout from "./";
import LoginForm from "@/components/authentication/LoginForm";

const login = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default login;
