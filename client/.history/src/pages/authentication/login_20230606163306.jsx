import React from "react";
import AuthLayout from "../index";
import LoginForm from "@/components/authentication/LoginForm";

const login = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default login;
