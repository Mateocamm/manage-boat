import { Form, Input, Button, DatePicker, Select, Space } from "antd";
import React from "react";
import LayoutAdmin from "../../components/LayoutAdmin";
import { SaveOutlined } from "@ant-design/icons";
import styled from "styled-components";

import { AgentData } from "../../data/agentData";
import { BoatData } from "../../data/boatData";
import TextArea from "antd/lib/input/TextArea";

const Conteiner = styled.div`
  max-width: 600px;
  background-color: #fafafa;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 10px;
`;

const RangePicker = styled(DatePicker.RangePicker)`
  width: 100%;
`;

function add() {
  return (
    <LayoutAdmin>
      <h2>Add New Booking</h2>
      <Conteiner>
        <Form layout="vertical">
          <Form.Item name="startDate" label="Dates">
            <RangePicker format="DD/MM/YYYY" size="large" block />
          </Form.Item>

          <Form.Item name="agent" label="Agent">
            <Select size="large" defaultValue="-1">
              <Select.Option key="-1" value="-1">
                Select Agent
              </Select.Option>
              {AgentData.map((agent) => (
                <Select.Option key={agent.id} value={agent.id}>
                  {agent.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="boat" label="Boat">
            <Select size="large" defaultValue="-1">
              <Select.Option key="-1" value="-1">
                Select Boat
              </Select.Option>
              {BoatData.map((boat) => (
                <Select.Option key={boat.id} value={boat.id}>
                  {boat.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="noPerson" label="No. Pax">
            <Input size="large" />
          </Form.Item>

          <Form.Item name="type" label="Type">
            <Select size="large" defaultValue="-1">
              <Select.Option key="-1" value="-1">
                Select Type
              </Select.Option>
              <Select.Option key="1" value="1">Private</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name="status" label="Status">
            <Select size="large" defaultValue="1">
              <Select.Option key="1" value="1">
                Request
              </Select.Option>
              <Select.Option key="1" value="2">
                On Hold
              </Select.Option>
              <Select.Option key="1" value="3">
                Confirm
              </Select.Option>
              <Select.Option key="1" value="3">
                Docking
              </Select.Option>
              <Select.Option key="1" value="3">
                Share Trip
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name="notes" label="Notes">
            <TextArea size="large" rows="5" />
          </Form.Item>

          <Button icon={<SaveOutlined />} size="large" type="primary" block>
            Save
          </Button>
        </Form>
      </Conteiner>
    </LayoutAdmin>
  );
}

export default add;
