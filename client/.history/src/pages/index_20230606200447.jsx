import Layouts from "@/layouts/Layouts";
import Login from "./authentication/login";
import { getCookie } from "@/utils/cookies";
import { Col, Row, Layout } from 'antd'
import { Input } from '@/components/common';
import { Button } from "@/components/common";
import { useSelector } from "react-redux";


const style = {
  background: '#0092ff',
  padding: '8px 0',
};

export default function Home() {
  const cookie = getCookie("ac-token");
  const { user } = useSelector(state => state.auth);

  return (
    <>
      {cookie ? (
        <Layouts>
          <Layout style={{ minHeight: "100%", backgroundColor: "white", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <h1 className="font-bold text-2xl ml-auto px-4 border-r-[5px] border-r-[#0092ff]">הפרופיל שלי</h1>
            <div className="flex items-center justify-center flex-col md:flex-row bg-green-400 w-full md:w-[60vw] md:h-[50vh] h-[50vh] shadow-2xl">
              <div>
                <Input type="text" placeholder={user?.firstName} label="שם פרטי" />
                <Input type="text" placeholder={user?.lastName} />
              </div>
              <div>
                <Input type="text" placeholder={user?.username} />
                <Input type="text" placeholder={user?.email} />
              </div>
            </div>
          </Layout>
        </Layouts>
      ) : (
        <Login />
      )}
    </>
  );
}
