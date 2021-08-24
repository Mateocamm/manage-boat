import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Logo = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content:center;
  align-items:center;
  color:#fff;
`;

function LayoutRemove(props) {
  const [collapsed, setCollapsed] = useState(true);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        breakpoint="md"
        onCollapse={onCollapse}
      >
        <Logo className="logo">Admin</Logo>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link href="/dashboard"> Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<PieChartOutlined />}>
            <Link href="/bookings"> Bookings</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<DesktopOutlined />}>
            <Link href="/boatsadmin"> Boats</Link>
          </Menu.Item>

          <Menu.Item key="4" icon={<FileOutlined />}>
            <Link href="/agents"> Agents</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content>
          <div style={{ padding: 20, minHeight: 360 }}>{props.children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Boat Management 2021</Footer>
      </Layout>
    </Layout>
  );
}

export default LayoutRemove;
