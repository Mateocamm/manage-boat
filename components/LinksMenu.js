import React from "react";
import { Menu } from "antd";
import Link from "next/link";

const LinksMenu = ({ links, selectedKey, changeSelectedKey }) => {
  const styledLinks = [];
  links.forEach((link, index) =>
    styledLinks.push(
      <Menu.Item key={index} onClick={changeSelectedKey}>
        <Link href={link.href}>{link.title}</Link>
      </Menu.Item>
    )
  );

  return (
    <Menu mode="inline" theme="dark" >
      {styledLinks}
    </Menu>
  );
};
export default LinksMenu;
