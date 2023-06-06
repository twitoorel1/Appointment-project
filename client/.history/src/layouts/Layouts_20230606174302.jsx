import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
  DownOutlined,
  AntDesignOutlined
} from "@ant-design/icons";
import { Layout, Menu, theme, Dropdown, Space, Button, Avatar } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import { SkeletonLoader } from "@/components/common";
import AuthProvider from "@/context/AuthenticationContext";
import useLoader from "@/hooks/useLoader";
import { logoutByToken } from "@/redux/slices/authenticationSlice";
import { removeCookie } from "@/utils/cookies";




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
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    danger: true,
    label: (<Link href="" onClick=> התנתק</Link >)
  },
];


const Layouts = ({ children }) => {
  const dispatch = useDispatch();
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
              <Dropdown menu={{ items }} placement="bottom" trigger={["click"]}>
                <Button className="w-[10rem] h-[54px] rounded-full bg-white shadow-xl hover:bg-gray-100 border-none">
                  <Space className="flex items-center justify-evenly">

                    {/* <Image src="/avatar/avatar.jpg" alt="Avatar" width={100} height={100} className="rounded-full" /> */}

                    <Avatar
                      size={"large"}
                      style={{}}
                      src={"/avatar/avatar.jpg"}
                    />

                    <span>{user.firstName} {user.lastName}</span>
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
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