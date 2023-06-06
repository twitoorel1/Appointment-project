import React from "react";
import useLoader from "@/hooks/useLoader";
import AuthProvider from "@/context/AuthenticationContext";
import Navbar from "./Navbar/Navbar";

const Layouts = ({ children }) => {
  const isLoading = useLoader(800);

  return (
    <AuthProvider>
      <Navbar />
      <div className="mt-1 flex">
        <Sidebar/>
        <main className="flex-1">{children}</main>
      </div>
      <main>{children}</main>
    </AuthProvider>
  );
};

export default Layouts;
