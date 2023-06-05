import { createContext, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { isLoginByToken } from "@/redux/slices/authenticationSlice";

const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated, isRegister, isError } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(isLoginByToken());
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated === false) {
      // Redirect the user to the login page if they are not authenticated
      router.replace("/authentication/login");
    }
  }, [isAuthenticated, isRegister, isError, router]);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;
