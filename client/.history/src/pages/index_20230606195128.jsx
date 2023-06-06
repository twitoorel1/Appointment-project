import Layouts from "@/layouts/Layouts";
import Login from "./authentication/login";
import { getCookie } from "@/utils/cookies";
import { Col, Row, Layout } from 'antd'
import { Input } from '@/components/common';
import { Button } from "@/components/common";


const style = {
  background: '#0092ff',
  padding: '8px 0',
};

export default function Home() {
  const cookie = getCookie("ac-token")

  return (
    <>
      {cookie ? (
        <Layouts>
          <Layout style={{ minHeight: "100%", backgroundColor: "white", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <h1 className="font-bold text-2xl underline">הפרופיל שלי</h1>
            <div className="flex items-center justify-center flex-col md:flex-row bg-green-400 w-full md:w-[60vw] md:h-[50vh] h-[50vh] shadow-2xl">
              <div>
                <Input type="text" placeholder="Text" />
                <Input type="text" placeholder="Text" />
              </div>
              <div>
                <Input type="text" placeholder="Text" />
                <Input type="text" placeholder="Text" />
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
