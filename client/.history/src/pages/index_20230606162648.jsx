import { Button } from "@/components/common";
import Layout from "@/layouts/Layouts";
import { logoutByToken } from "@/redux/slices/authenticationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Login from "./authentication/login";
import { getCookie } from "@/utils/cookies";


export default function Home() {
  const cookie = getCookie("ac-token")

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
