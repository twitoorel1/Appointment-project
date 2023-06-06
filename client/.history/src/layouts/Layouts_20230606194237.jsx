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
  AntDesignOutlined, RedditOutlined,
  EditOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import { Layout, Menu, theme, Dropdown, Space, Button, Avatar } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import { SkeletonLoader } from "@/components/common";
import AuthProvider from "@/context/AuthenticationContext";
import useLoader from "@/hooks/useLoader";
import { logoutByToken } from "@/redux/slices/authenticationSlice";
import { removeCookie } from "@/utils/cookies";
import { isMobile } from "@/utils/device";




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




const Layouts = ({ children }) => {
  const dispatch = useDispatch();
  const isLoading = useLoader(800);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { user } = useSelector((state) => state.auth);


  const items = [
    {
      key: '1',
      label: (<Link href="/account/profile">הפרופיל שלי</Link>),
      icon: <RedditOutlined />
    },
    {
      key: '2',
      label: (<Link href="/account/editPassword">שנה סיסמה</Link>),
      icon: <EditOutlined />
    },
    {
      key: '3',
      danger: true,
      label: (<Link href="" onClick={() => dispatch(logoutByToken(user?._id))}>התנתק</Link >),
      icon: <LogoutOutlined />,
    },
  ];

  // let isMobile = isMobile()

  return (
    <AuthProvider>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={false}
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
            defaultSelectedKeys={["/account/profile"]}
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

                    <span>{user?.firstName} {user?.lastName}</span>
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </div>
          </Header>

          <Content style={{ margin: "16px", padding: "10px" }}>
            {isLoading ? <SkeletonLoader isLoading={isLoading} /> : children}
          </Content>

          <Footer style={{ textAlign: "center" }}>© 2023</Footer>
        </Layout>
      </Layout>
    </AuthProvider>
  )
}

export default Layouts