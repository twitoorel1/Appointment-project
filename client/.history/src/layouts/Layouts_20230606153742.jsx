import React from "react";
import useLoader from "@/hooks/useLoader";
import AuthProvider from "@/context/AuthenticationContext";
import Navbar from "./Navbar/Navbar";
import Sidebar from "@/components/Sidebar";
import { SkeletonLoader } from "@/components/common";
import { useSelector } from "react-redux";

const Layouts = ({ children }) => {
  const isLoading = useLoader(800);
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated === false || isAuthenticated === null) {
      // Redirect the user to the login page if they are not authenticated
      router.replace("/authentication/login");
    }
  }, [])


  return (
    <AuthProvider>
      <Navbar />
      <Sidebar />
      {/* <div className="mt-1 flex"> */}
      {/* <main className="w-full px-4 lg:px-20 lg:py-2  flex flex-col">
          {/* {isLoading ? <SkeletonLoader isLoading={isLoading} /> : children} */}
      {/* </main> */}
      {/* </div> */}
    </AuthProvider>
  );
};

export default Layouts;
