import Layouts from "@/layouts/Layouts";
import Login from "./authentication/login";
import { getCookie } from "@/utils/cookies";


export default function Home() {
  const cookie = getCookie("ac-token")

  return (
    <>
      {cookie ? (
        <Layouts>sss</Layouts>
      ) : (
        <Login />
      )}
    </>
  );
}
