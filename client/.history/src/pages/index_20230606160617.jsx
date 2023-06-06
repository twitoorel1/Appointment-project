import { Button } from "@/components/common";
import Layout from "@/layouts/Layouts";
import { logoutByToken } from "@/redux/slices/authenticationSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
      {isAuthenticated && (
        <Layout>
          <section id="Home">
            <h2>Welcome</h2>
            <Button
              className={`w-[100px] h-[50px]`}
              type="submit"
              onClick={() => dispatch(logoutByToken(user?._id))}
            >
              Logout
            </Button>
          </section>
        </Layout>
      )}
    </>
  );
}
