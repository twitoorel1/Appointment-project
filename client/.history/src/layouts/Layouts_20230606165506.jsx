import useLoader from "@/hooks/useLoader";
import AuthProvider from "@/context/AuthenticationContext";
import Navbar from "./Navbar/Navbar";
import Sidebar from "@/components/Sidebar";
import { SkeletonLoader } from "@/components/common";

const Layouts = ({ children }) => {
  const isLoading = useLoader(800);


  return (
    <AuthProvider>
      <Navbar />
      {/* <Sidebar /> */}

        {isLoading ? <SkeletonLoader isLoading={isLoading} /> : children}
      <main className="w-full px-4 lg:px-20 lg:py-2  flex flex-col">
      </main>
    </AuthProvider>
  );
};

export default Layouts;
