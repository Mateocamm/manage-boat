import React from "react";
import LayoutAdmin from "../../components/LayoutAdmin";
import { Button, Table } from "antd";
import { AgentData } from "../../data/agentData";
import Link from "next/link";
import styled from "styled-components";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
    responsive: ['sm'],
  },
  {
    title: "Contact Person",
    dataIndex: "contactPerson",
    key: "contactPerson",
    responsive: ['sm'],
  },
  {
    title: "",
    key: "action",
    render: (text, row) => (
      <>
        <a>View</a>
      </>
    ),
  },
];

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

function index() {
  return (
    <LayoutAdmin>
       <Header>
        <h2>Agent List</h2>
        <Link href={`/agents/add`}>
          <Button type="primary">Add New</Button>
        </Link>
      </Header>
      <Table dataSource={AgentData} columns={columns} />
    </LayoutAdmin>
  );
}

export default index;
