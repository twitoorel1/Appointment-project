import { FileOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const Navbar = () => {
  return (
    <div className="flex justify-between lg:items-center border-b border-[#091e4224] px-4">
      <div className="flex px-8"></div>
    </div>
  );
};

export default Navbar;
