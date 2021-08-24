import React from "react";
import LayoutAdmin from "../../components/LayoutAdmin";
import { Button, Table } from "antd";
import { BoatData } from "../../data/boatData";
import Link from "next/link";
import styled from "styled-components";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "No Person",
    dataIndex: "maxPerson",
    key: "maxPerson",
    responsive: ["sm"],
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
        <h2>Boats List</h2>
        <Link href={`/boatsadmin/add`}>
          <Button type="primary">Add New</Button>
        </Link>
      </Header>
      <Table dataSource={BoatData} columns={columns} />
    </LayoutAdmin>
  );
}

export default index;
