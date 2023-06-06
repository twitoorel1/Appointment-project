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
    key: 'mail',
    icon: <FileOutlined />,
  },
  {
    label: (
      <Link href={"/users"}>Users</Link>
    ),
    key: 'alipay',
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
  return (
    <div>Layouts</div>
  )
}

export default Layouts