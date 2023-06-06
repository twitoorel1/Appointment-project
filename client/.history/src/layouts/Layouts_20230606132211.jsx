import React from "react";
import useLoader from "@/hooks/useLoader";
import AuthProvider from "@/context/AuthenticationContext";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import { SkeletonLoader } from "@/components/common";

const Layouts = ({ children }) => {
  const isLoading = useLoader(800);

  return (
    <AuthProvider>
      <Navbar />
      <div className="mt-1 flex">
        <Sidebar />
        <main className="w-full px-4 lg:px-20 lg:py-2  flex flex-col">
          {/* {isLoading ? <SkeletonLoader isLoading={isLoading} /> : children} */}
        </main>
      </div>
    </AuthProvider>
  );
};

export default Layouts;
