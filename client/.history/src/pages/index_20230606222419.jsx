import Layouts from "@/layouts/Layouts";
import Login from "./authentication/login";
import { getCookie } from "@/utils/cookies";
import { Col, Row, Layout, Button as Btn, Space, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import { Input } from '@/components/common';
import { Button } from "@/components/common";
import { useSelector } from "react-redux";
import Image from "next/image";


export default function Home() {
  const cookie = getCookie("ac-token");
  const { user } = useSelector(state => state.auth);

  return (
    <>
      {cookie ? (
        <Layouts>
          <Layout style={{ minHeight: "100%", backgroundColor: "white", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <h1 className="font-bold text-2xl ml-auto px-4 my-6 border-r-[5px] border-r-[#0092ff]">הפרופיל שלי</h1>
            <div className="flex items-center justify-center flex-col bg-green-400 w-full md:w-[60vw] md:h-[50vh] h-min-[50vh] shadow-2xl">
              <div className="flex items-center justify-evenly w-full md:flex-row flex-col">
                <Input inputClassName={"md:w-[250px]"} variant="default" type="text" value={user?.firstName} label="שם פרטי" showLabel />
                <Input inputClassName={"md:w-[250px]"} variant="default" type="text" value={user?.lastName} label="שם משפחה" showLabel />
              </div>
              <div className="flex items-center justify-evenly w-full md:flex-row flex-col">
                <Input inputClassName={"md:w-[250px]"} variant="default" type="text" value={user?.username} label="שם משתמש" showLabel />
                {/* <Input inputClassName={"md:w-[250px]"} variant="default" type="text" value={user?.email} label="אימייל" showLabel /> */}
                <div className="flex flex-col items-center">
                  <Image className="object-fill w-20 h-20 rounded-full object-[60%, -3px] mb-3" src={"/avatar/avatar.jpg"} width={50} height={50} alt="Profile Image" />
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture"
                    maxCount={1}
                  >
                    <Btn icon={<UploadOutlined />}>העלה תמונה</Btn>
                  </Upload>
                </div>
                <Button type="submit" label="שמור שינויים" className={""} />
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
