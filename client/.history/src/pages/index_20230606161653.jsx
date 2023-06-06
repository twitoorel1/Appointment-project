import { Button } from "@/components/common";
import Layout from "@/layouts/Layouts";
import { logoutByToken } from "@/redux/slices/authenticationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Login from "./authentication/login";


export default function Home() {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();


  return (
    <>
      {isAuthenticated ? (
        <Layout>
          <section>
            <h2>Welcome</h2>
            
          </section>
        </Layout>
      ) : (
        <Login />
      )}
    </>
  );
}
