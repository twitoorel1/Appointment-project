import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const AuthLayout = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated]);

  return (
    <section className="bg-gray-700 w-screen h-screen">
      <main className="flex flex-col justify-center min-h-full mx-auto p-5 lg:w-1/4 lg:p-8">
        {children}
      </main>
    </section>
  );
};

export default AuthLayout;
