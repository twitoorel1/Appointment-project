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
import AuthProvider from "@/context/AuthenticationContext";

const items2 = [
  {
    label: (<Link href={"/"}>לוח בקרה</Link>),
    key: '1',
    icon: <FileOutlined />,
  },
  {
    label: "מעומדים",
    key: '2',
    icon: <PieChartOutlined />,
    children: [
      {
        label: (<Link href={"/candidate"}>צור מעומד חדש</Link>),
        key: '2.1',
        icon: <TeamOutlined />,
      },
    ]
  },
  {
    label: (<Link href={"/users"}>משתמשים</Link>),
    key: '3',
    icon: <UserOutlined />,
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

const Layouts = ({ children }) => {
  const isLoading = useLoader(800);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { user } = useSelector((state) => state.auth);

  return (
    <AuthProvider>
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
          <Header style={{ padding: 0, backgroundColor: "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="p-5 ml-auto">
              <Button className=" bg-white text-black p-5 hover:bg-[#d8e0e6]">שלום, {user.firstName} {user.lastName}
                <DownOutlined /></Button>
            </div>
          </Header>

          <Content style={{ margin: "16px" }}>
            {isLoading ? <SkeletonLoader isLoading={isLoading} /> : children}
          </Content>

          <Footer style={{ textAlign: "center" }}>© 2023</Footer>
        </Layout>
      </Layout>
    </AuthProvider>
  )
}

export default Layouts