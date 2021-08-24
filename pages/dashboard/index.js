import React from "react";
import LayoutAdmin from "../../components/LayoutAdmin";
import styled from "styled-components";
import { Table } from "antd";
import { AgentData } from "../../data/agentData";
import { BoatData } from "../../data/boatData";

const columnsAgent = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Bookings",
    dataIndex: "bookings",
    key: "bookings",
    render: (text, row) => <span>0</span>,
  },
];

const columnsBoats = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Bookings",
      dataIndex: "bookings",
      key: "bookings",
      render: (text, row) => <span>0</span>,
    },
  ];
const ListCard = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(265px, 1fr)
  ); /* Where the magic happens */
  
  grid-gap: 20px;
  margin: 20px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:40px 20px;
  background-color: #fff;
  transform: translateY(0);
  transition: all 0.3s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

const ListMainCard = styled.div``;
const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  margin-bottom: 20px;
  
`;

const TitleCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: #001529;
  color: #fafafa;
  padding: 8px 20px;
  font-size: 20px;
  letter-spacing: 1.2px;
`;
const ContentCard = styled.div``;

function index() {
  return (
    <LayoutAdmin>
      <h2>Dashboard</h2>

      <ListCard>
        <Card>
          <h3>Confirm Bookings</h3>
          <span>10</span>
        </Card>
        <Card>
          <h3>Request Booking</h3>
          <span>10</span>
        </Card>
        <Card>
          <h3>Cancel Booking</h3>
          <span>10</span>
        </Card>
      </ListCard>

      <ListCard>
        <MainCard>
          <TitleCard>Boat Bookings</TitleCard>
          <ContentCard>
            <Table dataSource={BoatData} columns={columnsBoats} pagination={false}  />
          </ContentCard>
        </MainCard>
        <MainCard>
          <TitleCard>Agent Bookings</TitleCard>
          <ContentCard>
            <Table dataSource={AgentData} columns={columnsAgent} pagination={false} />
          </ContentCard>
        </MainCard>
      </ListCard>
    </LayoutAdmin>
  );
}

export default index;
