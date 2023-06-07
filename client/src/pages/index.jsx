import Layouts from "@/layouts/Layouts";
import Login from "./authentication/login";
import { getCookie } from "@/utils/cookies";
//
import Profile from "./candidate/index";

import { ConfigProvider } from "antd";
import heIL from "antd/locale/he_IL";

export default function Home() {
  const cookie = getCookie("ac-token");

  return (
    <>
      {cookie ? (
        <ConfigProvider locale={heIL}>
          <Layouts>
            <Profile />
          </Layouts>
        </ConfigProvider>
      ) : (
        <Login />
      )}
    </>
  );
}
