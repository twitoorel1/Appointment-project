import React from "react";
import useLoader from "@/hooks/useLoader";
import AuthProvider from "@/context/AuthenticationContext";

const Layouts = ({ children }) => {
  const isLoading = useLoader(800);

  return (
    <AuthProvider>
      <h4>Navbar</h4>
      <main>{children}</main>
    </AuthProvider>
  );
};

export default Layouts;
