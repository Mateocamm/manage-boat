import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Nav = styled.nav`
  padding-left: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color:#001529;
  display:flex;
`;

const BtnMenu = styled(Button)`
  @media (min-width: 992px) {
    display: none;
  }
`;

const Logo = styled.h1`
  color: #fff;
  margin-left: 1rem !important;
`;

const DrawerMenu = styled(Drawer)`
  padding: 0;
`;

const NavBar = ({ menu }) => {
  const [visible, setVisible] = useState(false);
  return (
    <Nav>
      <BtnMenu
        type="primary"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
      />
      <DrawerMenu
        title="Admin"
        placement="left"
        bodyStyle={{background:'#001529'}}
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        {menu}
      </DrawerMenu>
      <a href="/">
        <Logo>Admin</Logo>
      </a>
    </Nav>
  );
};

export default NavBar;
