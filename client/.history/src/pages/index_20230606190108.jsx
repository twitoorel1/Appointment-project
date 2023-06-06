import Layouts from "@/layouts/Layouts";
import Login from "./authentication/login";
import { getCookie } from "@/utils/cookies";


export default function Home() {
  const cookie = getCookie("ac-token")

  return (
    <>
      {cookie ? (
        <Layouts>
          <Layout style={{ minHeight: "100%", backgroundColor: "white", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}></Layout>
        </Layouts>
      ) : (
        <Login />
      )}
    </>
  );
}
