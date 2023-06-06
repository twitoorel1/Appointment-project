import Layout from "@/layouts/Layouts";
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
