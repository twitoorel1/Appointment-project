import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
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
import { Button } from "@/components/common";

const items2 = [
  {
    label: 'Navigation One',
    key: '1',
    icon: <FileOutlined />,
  },
  {
    label: (
      <Link href={"/users"}>Users</Link>
    ),
    key: '2',
  },
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

const Layouts = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { user } = useSelector((state) => state.auth);


  return (
    <Layout style={{ minHeight: "100vh" }}>
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
        <Header style={{padding: 0, backgroundColor:"transparent"}}></Header>
      </Layout>
    </Layout>
  )
}

export default Layouts