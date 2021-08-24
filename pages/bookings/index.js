import React from "react";
import styled from "styled-components";
import LayoutAdmin from "../../components/LayoutAdmin";
import { Table, Tag, Space, Button } from "antd";
import { BookingData } from "../../data/bookingData";
import Link from "next/link";

const TableData = styled(Table)`
  font-size: 10px;
  overflow-x: scroll;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const BookingMob = styled.div`
  display: flex;
  flex-direction: column;
`;

const columns = [
  {
    title: "BOOKING",
    dataIndex: "boat",
    key: "boat",
    responsive: ["xs"],
    render: (text, row) => (
      <>
        <div>{row.boat}</div>
        <div>{row.dateFrom} - {row.dateTo}</div>
        <div>{row.agent}</div>
        <Tag color={row.status == "Confirm" ? "green" : "blue"}>{row.status}</Tag>
      </>
    ),
  },
  {
    title: "BOAT",
    dataIndex: "boat",
    key: "boat",
    responsive: ["sm"],
  },
  {
    title: "DATES",
    dataIndex: "dateFrom",
    key: "dateFrom",
    responsive: ["sm"],
    render: (text, row) => (
      <>
        {text} - {row.dateTo}
      </>
    ),
  },

  {
    title: "AGENT",
    dataIndex: "agent",
    key: "agent",
    responsive: ["sm"],
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    responsive: ["lg"],
    render: (text) => (
      <Tag color={text == "Confirm" ? "green" : "blue"}>{text}</Tag>
    ),
  },
  {
    title: "",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>View</a>
      </Space>
    ),
  },
];

function index() {
  return (
    <LayoutAdmin>
      <Header>
        <h2>Bookings</h2>
        <Link href={`/bookings/add`}>
          <Button type="primary">Add New</Button>
        </Link>
      </Header>
      <TableData dataSource={BookingData} columns={columns} />
    </LayoutAdmin>
  );
}

export default index;
