import { Button } from "@/components/common";
import Layout from "@/layouts/Layouts";
import { logoutByToken } from "@/redux/slices/authenticationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Login from "./authentication/login";
import { getCookie } from "@/utils/cookies";


export default function Home() {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();
  const cookie = getCookie("ac-token")

  {/* 
            <Button
              className={`w-[100px] h-[50px]`}
              type="submit"
              onClick={() => dispatch(logoutByToken(user?._id))}
            >
              Logout
            </Button>
            import { logoutByToken } from "@/redux/slices/authenticationSlice";
 const dispatch = useDispatch();
*/}

  return (
    <>
      {cookie ? (
        <Layout>
          <section>
          </section>
        </Layout>
      ) : (
        <Login />
      )}
    </>
  );
}
