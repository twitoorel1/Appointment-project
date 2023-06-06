import { Button } from "@/components/common";
import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Dropdown, Space } from "antd";
const { Header, Content, Footer, Sider } = Layout;

import Image from "next/image";

import { useState } from "react";
import { useSelector } from "react-redux";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items2 = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { user } = useSelector((state) => state.auth);


  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Image
          className="mx-auto m-6 md:w-[130px]"
          src="/logo/logo-white.png"
          alt="Logo"
          width={100}
          height={100}
        />
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items2}
        />
      </Sider>

      <Layout>
        <Header style={{ padding: 0, backgroundColor: "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="p-5 ml-auto">
            <Button className=" bg-white text-black p-5 hover:bg-[#d8e0e6]">שלום, {user.firstName} {user.lastName}
              <DownOutlined /></Button>
          </div>
        </Header>
        <Content style={{ margin: "16px" }}>
          <div style={{ padding: 24, minHeight: 360, backgroundColor: "#fff" }}>
            {/* Children */}
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}>© 2023</Footer>
      </Layout>
    </Layout >
  );
};
export default Navbar;
