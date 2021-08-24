import React, { useState } from "react";
import { Layout } from "antd";
import LinksMenu from "./LinksMenu";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import styled from "styled-components";

const Content = styled(Layout.Content)`
  padding: 1rem;
  min-height: 100vh;
`;

function LayoutAdmin(props) {
  const links = [
    { title: "Dashboard", href: "/dashboard" },
    { title: "Bookings", href: "/bookings" },
    { title: "Boats", href: "/boatsadmin" },
    { title: "Agents", href: "/agents" },
  ];
  const [contentIndex, setContentIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState("0");

  const changeSelectedKey = (event) => {
    const key = event.key;
    setSelectedKey(key);
    setContentIndex(+key);
  };
  const Menu = (
    <LinksMenu
      links={links}
      selectedKey={selectedKey}
      changeSelectedKey={changeSelectedKey}
    />
  );

  return (
    <div>
      <NavBar menu={Menu} />
      <Layout>
        <SideBar menu={Menu} />
        <Content>{props.children}</Content>
      </Layout>
    </div>
  );
}

export default LayoutAdmin;
