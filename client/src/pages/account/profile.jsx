import React from "react";
import Layouts from "@/layouts/Layouts";
import { Input } from "@/components/common";
import { Col, Row, Layout, Button as Btn, Space, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Button } from "@/components/common";
import { useSelector } from "react-redux";
import Image from "next/image";

const profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Layouts>
      <Layout
        style={{
          minHeight: "100%",
          minWidth: "100%",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="font-bold text-2xl ml-auto px-4 my-6 border-r-[5px] border-r-[#0092ff]">
          הפרופיל שלי
        </h1>

        <div className="grid grid-rows-6 md:grid-rows-4 md:grid-cols-4 grid-cols-2 grid-flow-col md:grid-flow-row md:gap-5 bg-white shadow-2xl p-5 w-full h-full md:w-auto md:h-auto">
          <div className="col-span-2 md:col-span-2">
            <Input
              variant="default"
              type="text"
              placeholder={user?.firstName}
              label="שם פרטי"
              showLabel
            />
          </div>
          <div className="col-span-2 md:col-span-2">
            <Input
              variant="default"
              type="text"
              placeholder={user?.lastName}
              label="שם משפחה"
              showLabel
            />
          </div>
          <div className="col-span-2 md:col-span-2">
            <Input
              variant="default"
              type="text"
              placeholder={user?.username}
              label="שם משתמש"
              showLabel
            />
          </div>
          <div className="col-span-2 md:col-span-2 md:row-start-3">
            <Input
              variant="default"
              type="text"
              placeholder={user?.email}
              label="אימייל"
              showLabel
            />
          </div>
          <div className="col-span-2 md:block md:row-span-2">
            <div className="flex items-center justify-evenly flex-col">
              <Image
                className="object-fill w-20 h-20 rounded-full object-[60%, -3px] mb-5"
                src={`${user?.imgSRC ? user?.imgSRC : "/avatar/avatar.jpg"}`}
                width={50}
                height={50}
                alt="Profile Image"
              />
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                maxCount={1}
              >
                <Btn icon={<UploadOutlined />}>העלה תמונה</Btn>
              </Upload>
            </div>
          </div>
          <div className="col-span-2">
            <Button
              type="submit"
              label="שמור שינויים"
              className={"w-10/12 mt-10 md:mt-0"}
            />
          </div>
        </div>
      </Layout>
    </Layouts>
  );
};

export default profile;
