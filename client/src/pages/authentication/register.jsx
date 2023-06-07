import React from "react";
import AuthLayout from "@/layouts/AuthLayout";
import RegisterForm from "@/components/authentication/RegisterForm";

const login = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default login;
