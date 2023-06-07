import React from "react";
import Layouts from "@/layouts/Layouts";
import { Col, Row, Layout, Button as Btn, Space, Upload } from "antd";
import { Input } from "@/components/common";
import { useSelector } from "react-redux";
import { Button } from "@/components/common";

const editPassword = () => {
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
          שינוי סיסמה
        </h1>

        <div className="grid md:grid-rows-3 md:grid-cols-4 grid-cols-2 grid-row-4 gap-5 grid-flow-row md:grid-flow-col bg-white shadow-2xl p-5 w-full h-full md:w-[700px] md:h-full">
          <div className="col-span-2 md:col-span-4">
            <Input
              variant="default"
              type="text"
              placeholder="סיסמה נוכחית"
              label="סיסמה נוכחית"
              showLabel
            />
          </div>
          <div className="col-span-2 md:col-span-2">
            <Input
              variant="default"
              type="text"
              placeholder="סיסמה חדשה"
              label="סיסמה חדשה"
              showLabel
            />
          </div>
          <div className="col-span-2 md:col-span-2 md:row-start-2">
            <Input
              variant="default"
              type="text"
              placeholder="אימות סיסמה חדשה"
              label="אימות סיסמה חדשה"
              showLabel
            />
          </div>
          <div className="col-span-2 md:col-start-1 md:col-end-3 md:col-span-4 md:row-start-3">
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

export default editPassword;
