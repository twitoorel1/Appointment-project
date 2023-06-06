import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
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
import { cookies } from "next/dist/client/components/headers";

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



const Home = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { user } = useSelector((state) => state.auth);


  return (
    <>
    {cookies}
    </>
  );
}

export default Home