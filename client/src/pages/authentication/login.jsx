import React from "react";
import AuthLayout from "@/layouts/AuthLayout";
import LoginForm from "@/components/authentication/LoginForm";

const login = () => {
  return (
    <AuthLayout>
      <div>
        <LoginForm />
      </div>
    </AuthLayout>
  );
};

export default login;
