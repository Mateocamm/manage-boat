import React from "react";
import { Layout } from "antd";
import styled from "styled-components";

const SiderBar = styled(Layout.Sider)`
  height: 1000px;
  background-color:#001529;
`;

const SideBar = ({ menu }) => {
  return (
    <SiderBar
      breakpoint={"lg"}
      collapsedWidth={0}
      trigger={null}
    >
      {menu}
    </SiderBar>
  );
};

export default SideBar;
